# Style Guide Swedish (sv_SE)

Var noga med att din översättning betyder samma sak som ursprungstexten. På det sättet kan du säkerställa att ursrpungsförfattarens tankar bibehålls och att informationen är korrekt. Om det är nödvändigt, förklara termer som inte har översatts. Den som söker hjälp kan behöva den just för att termen inte är översatt. Om en förklaring blir lång, använd hellre en länk till en annan SUMO-artikel eller en extern sida där termen förklaras.

## Lägga till

Din översättning ska bibehålla betydelsen av originaltexten, inte lägga till nya koncept eller tankar som inte finns i originalet.

## Ta bort

Översätt alltid allt innehåll i originaltexten. Om den t.ex. beskriver en process, var noga med att alla steg i processen är översatta och att inga detaljer varje steg förloras.

## Oöversatt text

Undvik att lämna kvar delar av den ursprungliga texten. Utöver att texten blir svåröverskådlig så tappar den delvis sitt syfte, att vara en svenskspråkig version och ska därför inte innehålla delar av den ursprungliga texten.

## Stavning

Det är väldigt viktigt att stavningen är korrekt i översättningen. Ta hjälp med att se till att stavningen är korrekt med hjälp av stavningskontrollen i din webbläsare, eller kopiera texten till din favoritordbehandlare (LibreOffice Writer, Microsoft Word m.fl) och gör den nödvändiga korrigeringarna. I de fall där stavningskontrollen inte kan hjälpa till (t.ex ett engelskspråkigt uttryck som inte ska översättas, variabelnamn, CCS och textetiketter) gör en extra kontroll i terminologilistan. Precis som i många spel där stavningen är viktig ska Svenska Akademiens Ordlista användas vid tveksamma fall.

## Grammatik

Vid tveksamheter i grammatikfrågor hänvisas till Svenska Akademiens Grammatik

## Terminologi

Försök att vara konsekvent vid översättningen av termer. Använd gärna Transvision eller terminologilistan i Pootle för att söka på hur termen har översatts tidigare. Det är också en fördel om du använder samma terminologi som i andra produkter med samma användningsområde. Microsoft har publicerat en terminologilista som kan vara relevant för att använda samma term som i deras produkter.

## Stil

Använd en informell stil, men använd inte slang. Skriv som till en vän, inte som till en myndighet.

I produkter (Firefox och Firefox för Android) försök att använda stilen i originaltexten. I artiklar (SUMO) är den regeln inte lika viktig, utan där är det bättre att använda den stil som ger den mest lättlästa texten

Om texten ska användas i menyer eller i en produkts gränssnitt, försök skriva kort för att undvika att texten blir klippt. Pontoon visar översättningens antal tecken och jämför med originaltextens.

I några fall finns det en sträng kopplad till textsträngen som kontrollerar storleken på den yta där texten visas. I de fallen kan du prova och välja en mer passande storlek för den svenska översättningen.

## Förkortningar

Det finns inga regler för när förkortningar ska användas och när de inte ska användas. Men prova texten där den ska visas för att avgöra om förkortningar behövs, om texten kan klippas i slutet eller om den behöver skrivas om på ett kortare sätt. Detta är speciellt viktigt när de sista orden i meningen är viktiga och det är viktigt att de inte klipps av att utrymmet tar slut. Ibland är det då bättre att använda förkortningar i början för att få med hela meningen.

## Etiketter och kod

Etiketter är vanliga i strängar i Mozillaprodukter. Den generella regeln är att all text mellan vinklar (<>) inte ska översättas. Om en sträng innehåller HTML-kod, är det vanligtvis för att styra textens utseende. Till exempel, en sträng på Engelska kan se ut så här: "Firefox is the <em> best </ em> browser". Oftast är det korrekt att behålla koden runt samma ord på svenska, men i andra fall kan man behöva flytta koden runt ett annat ord i översättningen. Om en string innehåller en kod för ny rad (\n i PHP och <BR> i HTML) kan den behöva flyttas för att översättningen ska visas snyggt

## Variabler

Inga ord som börjar med “&” eller “%” ska översättas då de är variabler som i produkter ersätts av andra texter. Några vanliga exempel på variabler och platshållare (kod som används för att bestämma var externt innehåll ska stoppas in) är “&brandShortName”, “%1$1” och “%@”

## Kortkommandon

Vid översättning med hjälp av Pootle så sätter Pootle lämpliga kortkommandon automatiskt. När andra verktyg används är det viktigaste att samma kortkommando inte redan används i samma skärmbild och att den valda bokstaven finns med i den text som kortkommadot hör till.

## Metaforer

Vid de tillfällen då metaforer används i originaltexten och denna metafor inte känns relevant i Sverige försöker vi byta ut den till en metafor som passar bättre i svensk kultur. T.ex kan en metafor om baseball bytas ut mot en som ishockey.
