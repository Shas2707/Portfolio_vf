window.onload = function () {
    const ajouterLigneButton = document.getElementById('ajouter-ligne');
    const remplirAutoButton = document.getElementById('remplir-auto');
    const calculerButton = document.getElementById('calculer');
    const annulerButton = document.getElementById('annuler');
    const imprimerButton = document.getElementById('imprimer');
    const sousTotalElement = document.getElementById('sous-total');
    const remiseElement = document.getElementById('remise');
    const remiseTotalElement = document.getElementById('remise-total');
    const taxeTotalElement = document.getElementById('taxe-total');
    const soldeTotalElement = document.getElementById('solde-total');
    const table = document.getElementById('table_inv').getElementsByTagName('tbody')[0];
    const modeleLigne = document.getElementById('modeleLigne');
    
    ajouterLigneButton.addEventListener('click', () => {
        const newRow = modeleLigne.cloneNode(true);
        newRow.classList.remove('lastrow');
        newRow.querySelector('.total').value = '0.00';
        table.insertBefore(newRow, document.getElementById('lastligne'));
        updateCalcul();
    });
    remplirAutoButton.addEventListener('click', () => {
        const rows = table.getElementsByClassName('row');
        for (let row of rows) {
            const desc = row.querySelector('.desc');
            const qte = row.querySelector('.qte');
            const prix = row.querySelector('.prix');
            const total = row.querySelector('.total');

            desc.value = 'Produit';
            qte.value = 1;
            prix.value = 10.00;

            total.value = (parseFloat(qte.value) * parseFloat(prix.value)).toFixed(2);
        }
        updateCalcul();
    });

    calculerButton.addEventListener('click', updateCalcul);

    annulerButton.addEventListener('click', () => {
        const rows = table.getElementsByClassName('row');
        while (rows.length > 1) {
            rows[0].remove();
        }
        sousTotalElement.textContent = '0.00';
        remiseTotalElement.textContent = '0.00';
        taxeTotalElement.textContent = '0.00';
        soldeTotalElement.textContent = '0.00';
        remiseElement.value = '10';
    });

    imprimerButton.addEventListener('click', () => {
        window.print();
    });

    function updateCalcul() {
        let sousTotal = 0;
        const rows = table.getElementsByClassName('row');
        for (let row of rows) {
            const qte = row.querySelector('.qte');
            const prix = row.querySelector('.prix');
            const total = row.querySelector('.total');
            const totalLigne = parseFloat(qte.value) * parseFloat(prix.value);
            total.value = totalLigne.toFixed(2);
            sousTotal += totalLigne;
        }

        const remise = parseFloat(remiseElement.value) / 100;
        const remiseTotal = sousTotal * remise;
        const sousTotalMoinsRemise = sousTotal - remiseTotal;

        const taxe = 0.10; 
        const taxeTotal = sousTotalMoinsRemise * taxe;

        const expedition = 5.00;
        const soldeTotal = sousTotalMoinsRemise + taxeTotal + expédition;
        sousTotalElement.textContent = sousTotal.toFixed(2);
        remiseTotalElement.textContent = remiseTotal.toFixed(2);
        taxeTotalElement.textContent = taxeTotal.toFixed(2);
        soldeTotalElement.textContent = soldeTotal.toFixed(2);
    }
};
