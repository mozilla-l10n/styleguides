# Style Guide Italian (it)

## Regole generali di traduzione

La localizzazione (traduzione) dei software Mozilla, della documentazione della Knowledge Base e delle estensioni segue regole precise e consolidate.

Tutti i localizzatori che operano per Mozilla Italia utilizzano le stesse regole di stile per i programmi, per le estensioni e per la documentazione.

Esistono comunque casi in cui il buon senso può ugualmente produrre una traduzione consistente (o addirittura migliore) ignorando in modo consapevole queste regole.

In caso di dubbi su questioni di stile non affrontate in questo articolo, è possibile consultare [questa pagina](http://wiki.services.openoffice.org/wiki/IT/StyleGuides) del Wiki di OpenOffice.org che contiene molti link utili per la traduzione della documentazione tecnica.

Le discussioni sulla localizzazione avvengono nella [sezione localizzazioni](http://forum.mozillaitalia.org/viewforum.php?f=8) del forum e nella [sezione dedicata a SUMO](http://forum.mozillaitalia.org/index.php?board=25.0) (documentazione), in cui tutti gli utenti possono inoltrare eventuali segnalazioni o proposte di correzione.

## Terminologia

Verificare scrupolosamente la correttezza dei termini utilizzati. Nel dubbio è possibile verificare sul [Dizionario Hoepli](http://dizionari.hoepli.it/Dizionario_Italiano.aspx?idD=1) o altri dizionari online, mentre in [questo articolo](https://www.mozillaitalia.org/home/2004/10/22/piccola-guida-grammaticale/) sono elencati gli errori commessi più di frequente.

Diversi termini tecnici non vengono tradotti. Alcuni esempi di parole da non tradurre: menu, file, browser, server, cookie, firewall, proxy.

### Casi notevoli

Vi sono alcune eccezioni a quanto detto precedentemente. Ad esempio la parola click in italiano verrà tradotta con clic (senza la k finale); si preferisce tradurre il verbo to click con fare clic (in luogo di cliccare). Altre eccezioni:

* login = accesso
* directory = cartella
* frame = riquadro

### Plurale dei termini tecnici

In italiano **tutti i sostantivi inglesi al plurale rimangono sempre invariati**.

* OK: file, cookie, plugin, mouse
* NO: files, cookies, plugins, mice

Alla fine della pagina è riportato un glossario con alcuni termini fondamentali e la relativa traduzione.

## Uso delle maiuscole

Diversamente da quanto avviene nella lingua inglese, l’italiano ha regole più rigide per quel che riguarda l’utilizzo delle maiuscole. Utilizzare le lettere maiuscole nei seguenti casi:

* nomi propri
* abbreviazioni e acronimi
* la prima lettera di ciascun termine che indichi il nome di un tasto della tastiera
* la prima lettera della prima parola di un periodo
* la prima lettera della prima parola di un titolo
* la prima lettera della prima parola di una funzione o di un’opzione

Esempio:

* OK: Come personalizzare la Barra degli indirizzi
* NO: Come Personalizzare la Barra degli Indirizzi

## Modi e tempi dei verbi

### Descrizioni e messaggi del programma

Si tratta dei messaggi che vengono inviati dal programma all’utilizzatore. **È sempre preferibile l’utilizzo dello stile impersonale, evitando quindi il discorso diretto.**

* OK: Visitare la pagina di download per scaricare il programma
* NO: Vai alla pagina di download per scaricare il programma

#### Aggettivi e pronomi possessivi

Per esigenza di utilizzo della forma impersonale, in questi messaggi si tende a sostituire gli aggettivi e i pronomi possessivi (mio, tuo, suo, ecc.) con “proprio”, “propria”; in alcuni casi è consentito ometterli del tutto. Esempi:

* OK: È necessario effettuare un backup del proprio profilo
* NO: Devi effettuare un backup del tuo profilo

* OK: All’apertura di Firefox verrà visualizzata la propria pagina iniziale.
* NO: Quando apri Firefox, viene visualizzata la tua pagina iniziale.

* OK: Se il computer non riesce a collegarsi ad Internet
* NO: Se il tuo computer non riesce a collegarsi ad Internet

#### Forme progressive

Le forme al gerundio vanno tradotte con il sostantivo relativo all’azione compiuta. Esempi:

* Loading… : Caricamento in corso…
* Saving…: Salvataggio in corso…
* Exiting…: Uscita dal programma in corso…

### Voci di menu/etichette dei pulsanti

Si tratta delle azioni associate al pulsante o alla voce di menu (oppure il nome della funzione o della finestra di dialogo richiamata al clic del mouse) e possono generalmente essere considerate come i comandi impartiti dall’utilizzatore al programma.

**La forma preferibile è la seconda persona dell’imperativo.** Da evitare gli articoli determinativi in quanto lo spazio in genere è per due o tre parole. Al posto di preposizioni articolate è meglio usare preposizioni semplici. Esempi:

* Salva pagina con nome…
* Visualizza sorgente pagina
* Aumenta zoom

### Titoli di finestre

Descrivono l’azione compiuta nella finestra. In mancanza di un nome definito, **utilizzare il sostantivo relativo all’azione in corso.**

* Creazione account
* Salvataggio file

### Tooltip (suggerimenti)

Si tratta dei messaggi descrittivi che compaiono in corrispondenza di un elemento dell’interfaccia al passaggio del puntatore del mouse. **La forma da utilizzare è il presente indicativo, terza persona singolare.** Gli articoli determinativi e indeterminativi vanno esclusi solo in casi di eccessiva prolissità (in questi casi potrebbe essere consigliabile anche l’uso di abbreviazioni). Il soggetto è implicitamente l’elemento sotto il cursore. Esempi:

* Interrompe il caricamento in corso (per il pulsante “Stop”)
* Apri una nuova scheda (per il pulsante “Nuova scheda”)

## Altre regole

Ecco, in ordine sparso, una serie di regole che è buona norma tenere presente:

### Forme di cortesia

Nella lingua inglese sono molto comuni (please, …); in italiano tali espressioni non vanno tradotte.

* OK: Per continuare premere OK
* NO: Per continuare si prega di premere OK

### Enfasi

Le espressioni enfatiche non vengono tradotte e in quei casi si preferisce dare al contenuto una resa più impersonale.

* OK: Impossibile salvare il file
* NO: Impossibile salvare il file!

### Personificazione dell’hardware e del software

Da evitare quando possibile, anche volgendo la frase al passivo.

* OK: Verranno eliminati i dati personali
* NO: Firefox eliminerà i dati personali

### Messaggi di conferma

Molto spesso le finestre di dialogo conferma per una determinata azione contengono messaggi del tipo “Si è sicuri di volere….?”. Di norma tali espressioni non vengono tradotte.

* OK: Eliminare il file?
* NO: Si è sicuri di voler eliminare il file?
