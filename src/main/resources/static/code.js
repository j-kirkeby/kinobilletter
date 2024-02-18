let billetter = [];

/* Kjøp av billetter */
$(function () {
    $("#kjop").click(function (event) {
        // Stopper <form> fra a resette, etter submit
        event.preventDefault();

        const innFilm = $("#film").val();
        const innAntall = $("#antall").val();
        const innFornavn = $("#fornavn").val();
        const innEtternavn = $("#etternavn").val();
        const innTelefonnr = $("#telefonnr").val();
        const innEpost = $("#epost").val();


        /* Hvis input er korrekt, legg til i array og oppdater tabell */
        if (sjekkInn(innFilm, innAntall, innFornavn, innEtternavn, innTelefonnr, innEpost)) {
            const bestilling = {
                film: innFilm,
                antall: innAntall,
                fornavn: innFornavn,
                etternavn: innEtternavn,
                telefonnr: innTelefonnr,
                epost: innEpost
            }

            /* Legg til i array */
            billetter.push(bestilling);

            /* Legg til i tabell (Alle bestillinger) */
            skrivTabell(bestilling);

            /* Reset alle felter (input og error) */
            resetInputs();
            resetErrors();
        }
    });

    /* Slett alle billetter */
    $("#slett").click(function () {
        // Tøm array
        billetter = [];

        // Tilbakestill tabell
        $("#billetter").html("<tr><th>Film</th><th>Antall</th><th>Fornavn</th>" +
            "<th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>");
    });
});


/* Reset error-meldinger */
function resetErrors(){
    $("#error-film").html("");
    $("#error-antall").html("");
    $("#error-fornavn").html("");
    $("#error-etternavn").html("");
    $("#error-telefonnr").html("");
    $("#error-epost").html("");
}

/* Reset input-felter */
function resetInputs () {
    $("#film").val("");
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");
}

/* Sjekk: er alt input riktig, skriver feilmeldinger */
function sjekkInn(film, antall, fornavn, etternavn, telefonnr, epost) {
    /* Reset feilmeldinger */
    resetErrors();

    /* Patterns */
    const antallPattern = $("#antall").attr("pattern");
    const fornavnPattern = $("#fornavn").attr("pattern");
    const etternavnPattern = $("#etternavn").attr("pattern");
    const telefonnrPattern = $("#telefonnr").attr("pattern");
    const epostPattern = $("#epost").attr("pattern");

    /* Sjekk input, sett på feilmeldinger */
    let fullstendig = true;

    if (film === ""){
        $("#error-film").html("Du må velge en film");
        fullstendig = false;
    }
    if (!new RegExp(antallPattern).test(antall)) {
        $("#error-antall").html("Antall må være mellom 0-999");
        fullstendig = false;
    }
    if (!new RegExp(fornavnPattern).test(fornavn)) {
        $("#error-fornavn").html("Fornavn må fylles inn [Aa-Åå]")
        fullstendig = false;
    }
    if (!new RegExp(etternavnPattern).test(etternavn)) {
        $("#error-etternavn").html("Etternavn må fylles inn [Aa-Åå]");
        fullstendig = false;
    }
    if (!new RegExp(telefonnrPattern).test(telefonnr)) {
        $("#error-telefonnr").html("Telefonnummer må fylles inn. [kun siffer (8)]");
        fullstendig = false;
    }
    if (!new RegExp(epostPattern).test(epost)) {
        $("#error-epost").html("Epost må fylles inn. Må inneholde @ og .");
        fullstendig = false;
    }

    return fullstendig;
}

function skrivTabell(bestilling) {
    let ut = "";
    ut += "<tr>";
    ut += "<td>" + bestilling.film + "</td>";
    ut += "<td>" + bestilling.antall + "</td>";
    ut += "<td>" + bestilling.fornavn + "</td>";
    ut += "<td>" + bestilling.etternavn + "</td>";
    ut += "<td>" + bestilling.telefonnr + "</td>";
    ut += "<td>" + bestilling.epost + "</td>";
    ut += "</tr>";

    $("#billetter").append(ut);
}