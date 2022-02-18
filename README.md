## Setup

För att starta programmet så skriver du

```bash

# Först
npm install

# Sedan
npm run dev

```

# Projektet

Jag skapade ett rymd projekt där det är en planet i mitten och stjärnor som snurrar runt den.
När jag letade efter vad jag skulle göra för projekt så tyckte jag att dessa projektet såg roligast ut.

Uppe i höger hörne av hemsidan så finns det en GUI där man kan ändra egenskaperna som ljusen har.
De är grupperade i två olika grupper så att man kan enkelt stänga en av de ifall man bara ska jobba med den ena.

Ifall man använder scroll hjulet så zoomar man in och ut och man använder musen för att rotera grafikerna.

Stjärnorna har ingen fast position där de ritas ut, på rad 28 i '../src/script.js' så används MATH.Random för att skapa en
slumpmässig position av stjärnorna.
