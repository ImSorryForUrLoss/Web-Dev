// make card details work
// TODO: replace all symbol char with correct icon
let url = window.location.href
const guid = url.split('#')[1]; // This will give you everything after the "#"
console.log(guid);

async function testaroo(guid) {
    // fetch card_key
    let filepath = "./the_idifier/card_ids.json";
    let response = await fetch(filepath);
    let card_ids = await response.json()

    // fetch all cards
    let filepath2 = "./the_downloader/cards.json";
    let response2 = await fetch(filepath2);
    let cards = await response2.json();

    let cardIndexVal = card_ids[guid]

    let card = cards[cardIndexVal]

    console.log(card)

    const card_name = document.getElementById('card_name');
    card_name.textContent = card.name + " "

    const card_mv = document.getElementById('card_mv');

    const test = "{0} {1} {2} {3} {4} {5} {6} {7} {8} {9} {10} {11} {12} {13} {14} {15} {16}"

    result = test.replace(/\{0\}/g, "<img class=\"icon\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdC b3g9JzAgMCAxMDAgMTAwJz48ZyBmaWxsPSdub25lJz48Y2lyY2xlIGZpbGw9 JyNDQUM1QzAnIGN4PSc1MCcgY3k9JzUwJyByPSc1MCcvPjxwYXRoIGQ9J00y MyA1Mi40MjhjMC05Ljc4NyAyLjA2MS0xOC44MTMgNi4xOTEtMjcuMDcyIDUu MTE3LTEwLjIzNiAxMi4xMjMtMTUuMzU1IDIxLjAxMi0xNS4zNTUgOC43OTcg MCAxNS42NjYgNC4zNTkgMjAuNjA1IDEzLjA2NCA0LjEyNyA3LjE4NiA2LjE5 MSAxNS41MzcgNi4xOTEgMjUuMDUxIDAgOS44ODEtMi4wNjQgMTguODE0LTYu MTkxIDI2LjgwMy01LjAzMSAxMC4wNTgtMTIuMDM1IDE1LjA4MS0yMS4wMTEg MTUuMDgxLTguNTMxIDAtMTUuMzA1LTQuMzA3LTIwLjMzNi0xMi45MjYtNC4z MDgtNy4zNjEtNi40NjEtMTUuNTc2LTYuNDYxLTI0LjY0NnptMTEuMzA5LTQu NDQ0YzAgMTIuOTI2IDEuOTMgMjIuOTg0IDUuNzk1IDMwLjE2OCAyLjY5MSA1 LjAyNSA2LjE0NiA3LjU0MSAxMC4zNjcgNy41NDEgMTAuMTQ2IDAgMTUuMjIx LTEwLjUwNiAxNS4yMjEtMzEuNTE4IDAtOS4yNDQtLjgwOS0xNy4wNTktMi40 MjItMjMuNDM0LTIuNzg1LTEwLjUwNC03LjQ5OC0xNS43Ni0xNC4xNDUtMTUu NzYtOS44NzkgMC0xNC44MTYgMTAuMTUtMTQuODE2IDMwLjQ0M3YyLjU2eicg ZmlsbD0nIzBEMEYwRicvPjwvZz48L3N2Zz4K \" >");
    result = result.replace(/\{1\}/g, "<img class=\"icon\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdC b3g9JzAgMCAxMDAgMTAwJz48ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0x KScgZmlsbD0nbm9uZSc+PGNpcmNsZSBmaWxsPScjQ0FDNUMwJyBjeD0nNTAn IGN5PSc1MC45OTgnIHI9JzUwJy8+PHBhdGggZD0nTTU1LjY4NSAxMS4wMDF2 NjQuMTA4YzAgNy42NzEgMy4yMjYgMTEuNTA0IDkuNjg3IDExLjUwNGgxLjY4 NHY0LjM4OGgtMzQuMTExdi00LjM4OGgyLjE0MWM2LjI0NyAwIDkuMzY5LTMu ODMzIDkuMzY5LTExLjUwNHYtNDIuMDU0YzAtNy43NTgtMi42OTctMTEuNjQz LTguMDgxLTExLjY0M2gtMy40Mjl2LTQuMjQ3aDEuMjM3YzYuNjYgMCAxMi42 OTEtMi4wNTcgMTguMDgtNi4xNjVsMy40MjMuMDAxeicgZmlsbD0nIzBEMEYw RicvPjwvZz48L3N2Zz4K \" >");
    result = result.replace(/\{2\}/g, "<img class=\"icon\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdC b3g9IjAgMCAxMDAgMTAwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2 ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI0NBQzVDMCIgY3g9IjUwIiBjeT0iNTAi IHI9IjUwIi8+PHBhdGggZD0ibTc4LjQ0MiA2OS4xMDUtNS42ODEgMTkuODk4 SDI1LjU1NXYtNC4yNTRjMi4yOTMtMi42NTIgNy4zMTgtOC4wMDEgMTUuMDc2 LTE2LjA1M2EzMzEuMjYxIDMzMS4yNjEgMCAwIDAgMTMuODgyLTE1LjM3MWMy LjI5MS0yLjY1MSA0LjA1Ny00Ljk0MiA1LjI4Ny02Ljg2MiAyLjczMy00LjEx NCA0LjEtOC4zMiA0LjEtMTIuNjI0IDAtNC4yMDQtMS4yNTQtNy45MTItMy43 NjYtMTEuMTEyLTIuNTEyLTMuMjA0LTUuNzUyLTQuODA4LTkuNzIyLTQuODA4 LTguNTQ4IDAtMTUuMjQ2IDUuOTk4LTIwLjA5NCAxNy45OGwtNC4yMzUtMS42 NDdjNS43My0xNi44MjkgMTQuNzYzLTI1LjI0OSAyNy4xMDYtMjUuMjQ5IDYu MDgzIDAgMTEuMjYxIDIuMTQ5IDE1LjUzNiA2LjQ0OCA0LjI3OCA0LjMgNi40 MTQgOS42MDQgNi40MTQgMTUuOTIgMCA4LjA1Mi00LjQ0OSAxNS45MTgtMTMu MzUzIDIzLjYwMWwtOS4yNTQgNy45NTZjLTUuOTA4IDUuMTI3LTEwLjgwNCA5 LjkyOS0xNC42NzYgMTQuNDEyLS4yNy4yNzMtLjc5Ni45MTYtMS41ODcgMS45 MjFoMjQuNTljMy43OSAwIDYuNjU2LS43NzYgOC41OTQtMi4zMzUgMS42NzIt MS4zNzIgMy4zMDktMy45OCA0Ljg5NS03LjgyMWg0LjA5NFoiIGZpbGw9IiMw RDBGMEYiLz48L2c+PC9zdmc+Cg==\" >");
    result = result.replace(/\{3\}/g, "<img class=\"icon\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdC b3g9JzAgMCAxMDAgMTAwJz48ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0x KScgZmlsbD0nbm9uZSc+PGNpcmNsZSBmaWxsPScjQ0FDNUMwJyBjeD0nNTAn IGN5PSc1MC45OTgnIHI9JzUwJy8+PHBhdGggZD0nTTM5LjU2MSA1My41NjJs LTIuMDE4LTMuNzcxIDEuMzM3LS44MDdjNS4xNzQtMy4xNDUgOS45MDMtNi4z MyAxNC4xODktOS41NjMgNC4yODQtMy4yMzIgNi40MjctNi45MTUgNi40Mjct MTEuMDQ4IDAtMi43NzgtMS4wMjktNS4xMTItMy4wODUtNi45OTgtMi4wNjEt MS44OTItNC40NzItMi44MzQtNy4yNDQtMi44MzQtNi40MzkgMC0xMy4yMzQg NC4wMDEtMjAuMzkyIDExLjk5MWwtMy4zNTQtMi41NTljNy40NTMtMTEuMzE2 IDE2LjU2Ni0xNi45NzQgMjcuMzQxLTE2Ljk3NCA0Ljc1NyAwIDguNzk1IDEu MTY4IDEyLjEyMiAzLjUwMyAzLjc3MSAyLjYwNyA1LjY1NSA2LjE1MyA1LjY1 NSAxMC42NDIgMCAzLjIyOS0xLjM0OSA2LjM3NC00LjAzOSA5LjQyNi0xLjUy OCAxLjc5OC00LjIyNiA0LjEzMi04LjA4MyA3LjAwNGwtMS42MTYgMS4yMTNj LjcxOC0uMDg5IDEuNTcyLS4xMzQgMi41Ni0uMTM0IDQuOTM3IDAgOC45OTgg MS44ODcgMTIuMTg4IDUuNjU3IDMuMTg4IDMuNzcxIDQuNzgzIDguMTcgNC43 ODMgMTMuMTk2IDAgOC41MzItMy41OTUgMTUuNjY3LTEwLjc3NCAyMS40MTYt Ni42NDcgNS4zODctMTQuMzI1IDguMDc3LTIzLjAzMiA4LjA3Ny03Ljk5MSAw LTE0LjI3Ni0xLjc0OC0xOC44NTgtNS4yNDlsMi40MjktMy4zNzFjNS4zODcg Mi42MDggMTAuMjc5IDMuOTA3IDE0LjY4MSAzLjkwNyA2LjM3MyAwIDEyLjA1 MS0yLjEwOSAxNy4wMzItNi4zMyA0Ljk4OC00LjIyIDcuNDc1LTkuNDY5IDcu NDc1LTE1Ljc1NSAwLTQuMTMyLTEuMjU1LTcuNjU1LTMuNzctMTAuNTc2LTIu NTE2LTIuOTE1LTUuNzkzLTQuMzc0LTkuODMyLTQuMzc0LTMuNjg0LjAwMi03 LjcyMyAxLjQzNy0xMi4xMjIgNC4zMTF6JyBmaWxsPScjMEQwRjBGJy8+PC9n Pjwvc3ZnPgo= \" >");
    result = result.replace(/\{4\}/g, "<img class=\"icon\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdC b3g9JzAgMCAxMDAgMTAwJz48ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0x KScgZmlsbD0nbm9uZSc+PGNpcmNsZSBmaWxsPScjQ0FDNUMwJyBjeD0nNTAn IGN5PSc1MC45OTgnIHI9JzUwJy8+PHBhdGggZD0nTTY0LjI3IDY4LjM1OXY2 LjcyM2MwIDcuNjg0IDIuNjk1IDExLjUyNSA4LjA5NCAxMS41MjVoMi4zM3Y0 LjM5NGgtMzIuNjU4di00LjM5NGgyLjYwN2M1LjMwMyAwIDcuOTYxLTMuNzk4 IDcuOTYxLTExLjM5MnYtNi44NTZoLTMyLjc5NXYtNi44NjFsMzQuNTc4LTUw LjQ5N2g5Ljg4M3Y1MS41OTJoLjgyYzMuMzgzIDAgNS44NTItMi42MDggNy40 MDgtNy44MTZoNC4xMTVsLTEuOTIgMTMuNTgzLTEwLjQyMy0uMDAxem0tMTEu NjY2LTUuNzY2di00MS40NThsLTI3Ljg5MyA0MS40NThoMjcuODkzeicgZmls bD0nIzBEMEYwRicvPjwvZz48L3N2Zz4K \" >");
    result = result.replace(/\{5\}/g, "<img class=\"icon\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdC b3g9JzAgMCAxMDAgMTAwJz48ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0x KScgZmlsbD0nbm9uZSc+PGNpcmNsZSBmaWxsPScjQ0FDNUMwJyBjeD0nNTAn IGN5PSc1MC45OTgnIHI9JzUwJy8+PHBhdGggZD0nTTM0Ljk1NyAxMi4zNTJo MjguOTQxYzMuNzU0IDAgNS45ODgtLjQ1IDYuNzAzLTEuMzUyaDQuMTU2bC0y LjQyMiAxMC45MjVoLTM1LjMxNGwtMy40MDggMTUuNzg5YzUuMTI3LTIuMDcg OS42NjgtMy4xMDQgMTMuNjI1LTMuMTA0IDcuNzI5IDAgMTQuMjUgMi41ODcg MTkuNTU5IDcuNzU4IDUuMzA1IDUuMTcxIDcuOTYxIDExLjYyMiA3Ljk2MSAx OS4zNTcgMCA4Ljk5Ni0zLjQ2NSAxNi4yMzctMTAuMzk0IDIxLjcyMi02LjM4 NSA1LjAzOS0xNC4xNjIgNy41NTMtMjMuMzM4IDcuNTUzLTUuMzk1IDAtMTAu NjYtLjgwOC0xNS43ODUtMi40MjZsMS42MTctNC4wNDZjNC4zMiAxLjE2OSA4 LjE0MSAxLjc1MSAxMS40NjkgMS43NTEgNi42NTQgMCAxMi40NzctMi4xOCAx Ny40NzMtNi41NDQgNC45OS00LjM1OCA3LjQ4OC05LjgyNiA3LjQ4OC0xNi4z OTIgMC01LjY2NS0xLjg0NC0xMC4zMi01LjUzMy0xMy45NTktMy42ODktMy42 NDYtOC4zNjUtNS40NjgtMTQuMDMzLTUuNDY4LTUuMjEzIDAtMTAuMDcgMS44 LTE0LjU2OCA1LjM5NmwtMi43MDEtLjUzOCA4LjUwNC0zNi40MjJ6JyBmaWxs PScjMEQwRjBGJy8+PC9nPjwvc3ZnPgo= \" >");
    result = result.replace(/\{6\}/g, "<img class=\"icon\" src=\"\" >");
    result = result.replace(/\{7\}/g, "<img class=\"icon\" src=\"\" >");
    result = result.replace(/\{8\}/g, "<img class=\"icon\" src=\"\" >");
    result = result.replace(/\{9\}/g, "<img class=\"icon\" src=\"\" >");
    result = result.replace(/\{10\}/g, "<img class=\"icon\" src=\"\" >");
    result = result.replace(/\{11\}/g, "<img class=\"icon\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdC b3g9JzAgMCAxMDAgMTAwJz48ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0x KScgZmlsbD0nbm9uZSc+PGNpcmNsZSBmaWxsPScjQ0FDNUMwJyBjeD0nNTAn IGN5PSc1MC45OTgnIHI9JzUwJy8+PHBhdGggZD0nTTM5LjgzMSAxOS4zMnY1 MC44NGMwIDYuMDQ5IDIuNTE2IDkuMDcgNy41MzYgOS4wN2gxLjI3OXYzLjQ0 OWgtMjcuMDgxdi0zLjQ0OWgxLjc4OGM1LjEwOSAwIDcuNjY3LTMuMDIxIDcu NjY3LTkuMDd2LTMzLjM0YzAtNi4xMzMtMi4xNzMtOS4xOTUtNi41MTgtOS4x OTVoLTIuNjgzdi0zLjQ0OWgxLjAyNGM1LjI4IDAgMTAuMDQ3LTEuNjE3IDE0 LjMwNC00Ljg1NWwyLjY4NC0uMDAxem0zMi40NDkgMHY1MC44NGMwIDYuMDQ5 IDIuNTExIDkuMDcgNy41MzcgOS4wN2gxLjI3OHYzLjQ0OWgtMjcuMDg2di0z LjQ0OWgxLjc4OGM1LjExNSAwIDcuNjY3LTMuMDIxIDcuNjY3LTkuMDd2LTMz LjM0YzAtNi4xMzMtMi4xNzMtOS4xOTUtNi41MTMtOS4xOTVoLTIuNjgydi0z LjQ0OWgxLjAxOWM1LjI4IDAgMTAuMDQ3LTEuNjE3IDE0LjMxLTQuODU1bDIu NjgyLS4wMDF6JyBmaWxsPScjMEQwRjBGJy8+PC9nPjwvc3ZnPgo= \" >");
    result = result.replace(/\{12\}/g, "<img class=\"icon\" src=\"\" >");
    result = result.replace(/\{13\}/g, "<img class=\"icon\" src=\"\" >");
    result = result.replace(/\{14\}/g, "<img class=\"icon\" src=\"\" >");
    result = result.replace(/\{15\}/g, "<img class=\"icon\" src=\"\" >");
    result = result.replace(/\{16\}/g, "<img class=\"icon\" src=\"\" >");
    // card_mv.innerHTML = card.mana_cost
    card_mv.innerHTML = result

    const card_type = document.getElementById('card_type');
    card_type.textContent = card.type_line

    const card_oracle = document.getElementById('card_oracle');
    result = card.oracle_text.replace(/\n/g, "<br>");
    result = result.replace(/\{11\}/g, "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdC b3g9JzAgMCAxMDAgMTAwJz48ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0x KScgZmlsbD0nbm9uZSc+PGNpcmNsZSBmaWxsPScjQ0FDNUMwJyBjeD0nNTAn IGN5PSc1MC45OTgnIHI9JzUwJy8+PHBhdGggZD0nTTM5LjgzMSAxOS4zMnY1 MC44NGMwIDYuMDQ5IDIuNTE2IDkuMDcgNy41MzYgOS4wN2gxLjI3OXYzLjQ0 OWgtMjcuMDgxdi0zLjQ0OWgxLjc4OGM1LjEwOSAwIDcuNjY3LTMuMDIxIDcu NjY3LTkuMDd2LTMzLjM0YzAtNi4xMzMtMi4xNzMtOS4xOTUtNi41MTgtOS4x OTVoLTIuNjgzdi0zLjQ0OWgxLjAyNGM1LjI4IDAgMTAuMDQ3LTEuNjE3IDE0 LjMwNC00Ljg1NWwyLjY4NC0uMDAxem0zMi40NDkgMHY1MC44NGMwIDYuMDQ5 IDIuNTExIDkuMDcgNy41MzcgOS4wN2gxLjI3OHYzLjQ0OWgtMjcuMDg2di0z LjQ0OWgxLjc4OGM1LjExNSAwIDcuNjY3LTMuMDIxIDcuNjY3LTkuMDd2LTMz LjM0YzAtNi4xMzMtMi4xNzMtOS4xOTUtNi41MTMtOS4xOTVoLTIuNjgydi0z LjQ0OWgxLjAxOWM1LjI4IDAgMTAuMDQ3LTEuNjE3IDE0LjMxLTQuODU1bDIu NjgyLS4wMDF6JyBmaWxsPScjMEQwRjBGJy8+PC9nPjwvc3ZnPgo= ");
    // console.log(card.oracle_text)
    card_oracle.innerHTML = result

    const card_img = document.getElementById('big_card')
    card_img.src = "./the_downloader/cimg/" + guid + ".jpg"
}

setTimeout(() => {
    testaroo(guid)
}, 1000);



