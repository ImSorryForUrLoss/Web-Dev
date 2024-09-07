# -*- coding: utf-8 -*-
"""
@author: me
generates 2^nth files starting with the chosen name
(for a minecraft texture pack (needed a lot of cit files))
"""

def fileGenLoop(name, size):
     # Loop through numbers from 0 to the upper limit
     
     num_bits = len(bin(2**size)) - 3
     
     for number in range(2**size):
         # Convert the number to binary (removing the '0b' prefix)
         bin_rep = bin(number)[2:].zfill(num_bits)
         # Print the number and its binary representation
         fileName = (name + str(bin_rep))
         filePath = fileName + ".properties"
         with open(filePath, "w") as file:
             file.write(fileFillLoop(name, bin_rep))

def fileFillLoop(name, bin_rep):
    """
    fills each file with text
    """
    
    f_contents = "type=item\n"
    f_contents += "matchItems=minecraft:dye\n"
    f_contents += "texture=./" + name + bin_rep + ".png\n"
    f_contents += "nbt.display.Name=ipattern:*" + name + " key pass*\n"
    for num in range(len(bin_rep)):
        cur_num = bin_rep[num:num + 1]
        if cur_num == "1":
            f_contents += "nbt.display.Lore." + str(num + 2) + "=!ipattern:*\\u2717*\n" 
        else:
            f_contents += "nbt.display.Lore." + str(num + 2) + "=ipattern:*\\u2717*\n"  

    return (f_contents)
    
if __name__ == "__main__":
    name = input('choose a word for the files to start with:')
    size = int(input('choose the number of files to create:'))
    
    if size > 0:
        fileGenLoop(name, size)
    else:
        print("ERROR: Number must be greater than 0")