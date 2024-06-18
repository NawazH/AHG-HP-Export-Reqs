document.getElementById('exportForm').addEventListener('submit', function(e) {

    e.preventDefault();

    const country = document.getElementById('country').value;

    const requirementsDiv = document.getElementById('requirements');
    const noteDiv = document.getElementById('text-note');

    requirementsDiv.innerHTML = '';
    noteDiv.innerHTML='';
 
    if (country === '') {

        requirementsDiv.innerHTML = '<p>Please select a country.</p>';

        return;

    }
 
    const requirements = getRequirementsByCountry(country);

    let requirementsList = '<ul>';

    requirements.forEach(req => {

        requirementsList += `<li>${req.text} <a href="${req.link}" target="_blank">Download/More Info</a></li>`;

    });

    requirementsList += '</ul>';
 
    requirementsDiv.innerHTML = requirementsList;
    noteDiv.innerHTML = "Please Note: Some countries will have certifications that will be acceptable to meet australian standards.  Examples are ASME, AHRI, EN, Eurovent, Keymark, etc.  If you product has met these requirements, it most likely will meet Australian standards and requirements without providing any additional certification or documentation.  "

});
 
function getRequirementsByCountry(country) {

    const requirements = {

        'Spain': [

            { text: 'Commercial Invoice', link: 'https://www.export.gov/article?id=Commercial-Invoice' },

            { text: 'Packing List', link: 'https://www.export.gov/article?id=Packing-List' },

            { text: 'Bill of Lading', link: 'https://www.export.gov/article?id=Bill-of-Lading' },

            { text: 'Certificate of Origin', link: 'https://www.iccwbo.org/resources-for-business/certificates-of-origin/' },

            { text: 'Customs Declaration', link: 'https://www.abf.gov.au/importing-exporting-and-manufacturing/importing/how-to-import' },

            { text: 'Compliance with Australian MEPS', link: 'https://www.energyrating.gov.au' },

            { text: 'Energy Rating Label', link: 'https://www.energyrating.gov.au/document/guides-and-factsheets-2016-energy-rating-label' },

            { text: 'Electrical Safety Certificate (AS/NZS 60335.2.40)', link: 'https://www.saiglobal.com' },

            { text: 'EMC Compliance (AS/NZS CISPR 14.1)', link: 'https://www.saiglobal.com' },

            { text: 'RCM Label', link: 'https://www.acma.gov.au' },

            { text: 'Refrigerant Standards Compliance', link: 'https://www.arctick.org' },

            { text: 'Insurance Certificate', link: 'https://www.export.gov/article?id=Insurance-Certificate' }

        ],

        'Japan': [

            { text: 'Commercial Invoice', link: 'https://www.export.gov/article?id=Commercial-Invoice' },

            { text: 'Packing List', link: 'https://www.export.gov/article?id=Packing-List' },

            { text: 'Bill of Lading', link: 'https://www.export.gov/article?id=Bill-of-Lading' },

            { text: 'Certificate of Origin', link: 'https://www.iccwbo.org/resources-for-business/certificates-of-origin/' },

            { text: 'Customs Declaration', link: 'https://www.abf.gov.au/importing-exporting-and-manufacturing/importing/how-to-import' },

            { text: 'Compliance with Australian MEPS', link: 'https://www.energyrating.gov.au' },

            { text: 'Energy Rating Label', link: 'https://www.energyrating.gov.au/document/guides-and-factsheets-2016-energy-rating-label' },

            { text: 'Electrical Safety Certificate (AS/NZS 60335.2.40)', link: 'https://www.saiglobal.com' },

            { text: 'EMC Compliance (AS/NZS CISPR 14.1)', link: 'https://www.saiglobal.com' },

            { text: 'RCM Label', link: 'https://www.acma.gov.au' },

            { text: 'Refrigerant Standards Compliance', link: 'https://www.arctick.org' },

            { text: 'Insurance Certificate', link: 'https://www.export.gov/article?id=Insurance-Certificate' },

            { text: 'JIS Certification', link: 'https://www.jisc.go.jp/eng/index.html' },

            { text: 'METI Approval', link: 'https://www.meti.go.jp/english/' }

        ],

        'South Korea': [

            { text: 'Commercial Invoice', link: 'https://www.export.gov/article?id=Commercial-Invoice' },

            { text: 'Packing List', link: 'https://www.export.gov/article?id=Packing-List' },

            { text: 'Bill of Lading', link: 'https://www.export.gov/article?id=Bill-of-Lading' },

            { text: 'Certificate of Origin', link: 'https://www.iccwbo.org/resources-for-business/certificates-of-origin/' },

            { text: 'Customs Declaration', link: 'https://www.abf.gov.au/importing-exporting-and-manufacturing/importing/how-to-import' },

            { text: 'Compliance with Australian MEPS', link: 'https://www.energyrating.gov.au' },

            { text: 'Energy Rating Label', link: 'https://www.energyrating.gov.au/document/guides-and-factsheets-2016-energy-rating-label' },

            { text: 'Electrical Safety Certificate (AS/NZS 60335.2.40)', link: 'https://www.saiglobal.com' },

            { text: 'EMC Compliance (AS/NZS CISPR 14.1)', link: 'https://www.saiglobal.com' },

            { text: 'RCM Label', link: 'https://www.acma.gov.au' },

            { text: 'Refrigerant Standards Compliance', link: 'https://www.arctick.org' },

            { text: 'Insurance Certificate', link: 'https://www.export.gov/article?id=Insurance-Certificate' },

            { text: 'KC Mark Certification', link: 'https://www.kats.go.kr/english/' },

            { text: 'KATS Approval', link: 'https://www.kats.go.kr/english/' }

        ],

        'India': [

            { text: 'Commercial Invoice', link: 'https://www.export.gov/article?id=Commercial-Invoice' },

            { text: 'Packing List', link: 'https://www.export.gov/article?id=Packing-List' },

            { text: 'Bill of Lading', link: 'https://www.export.gov/article?id=Bill-of-Lading' },

            { text: 'Certificate of Origin', link: 'https://www.iccwbo.org/resources-for-business/certificates-of-origin/' },

            { text: 'Customs Declaration', link: 'https://www.abf.gov.au/importing-exporting-and-manufacturing/importing/how-to-import' },

            { text: 'Compliance with Australian MEPS', link: 'https://www.energyrating.gov.au' },

            { text: 'Energy Rating Label', link: 'https://www.energyrating.gov.au/document/guides-and-factsheets-2016-energy-rating-label' },

            { text: 'Electrical Safety Certificate (AS/NZS 60335.2.40)', link: 'https://www.saiglobal.com' },

            { text: 'EMC Compliance (AS/NZS CISPR 14.1)', link: 'https://www.saiglobal.com' },

            { text: 'RCM Label', link: 'https://www.acma.gov.au' },

            { text: 'Refrigerant Standards Compliance', link: 'https://www.arctick.org' },

            { text: 'Insurance Certificate', link: 'https://www.export.gov/article?id=Insurance-Certificate' },

            { text: 'BIS Certification', link: 'https://bis.gov.in' },

            { text: 'Import Licensing', link: 'https://dgft.gov.in' }

        ],

        // Add more countries and their specific requirements here

    };
 
    return requirements[country] || [{ text: 'No specific requirements available for this country.', link: '#' }];

}

