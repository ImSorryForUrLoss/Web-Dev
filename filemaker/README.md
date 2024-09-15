# filemaker

## 2024-08-31 Saturday

Started utility as a Python programming exercise.

Calum is using a Minecraft mod. He needs to generate a bunch of files to use with the mod. Each filename is well defined, and the file contents are based on the filename.

We set up some skeleton code and started the first step of generating the filenames.

The main method prompts the user for inputs then calls fileGenLoop.

The fileGenLoop method determines the number of files to create then iterates through each, calling fileFillLoop.

## 2024-09-02 Monday

Finished fileFillLoop and the utility.

The user is prompted for the file name root, and the number of binary digits to use (e.g., 2 digits = generate 4 filenames).

Based on the binary digits, each file is created and different lines of the file are formatted with a "!" inserted.

## 2024-09-06 Friday

Utility added to Web-Dev as part of the portfolio. Added this readme on 9/8.
