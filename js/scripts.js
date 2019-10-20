//package data array
var data = [
    {
        name: 'Tyrannosaurs Rex',
        description: 'Tyrannosaurus rex (rex meaning "king" in Latin), often called T-rex. Tyrannosaurus rex was one of the largest meat-eating dinosaurs that ever lived. Everything about this ferocious predator, from its thick, heavy skull to its 4-foot-long (1.2-meter-long) jaw, was designed for maximum bone-crushing action.',
        size: 'Size: 40 feet (12 meters) long and about 15 to 20 feet (4.6 to 6 meters) tall',
        period: 'Time Period: Late Cretaceous',
        ate:'Type of Eater: Carnivore',
        selector: 'p1'
    },
    {
        name: 'Triceratops',
        description: 'Triceratops, with its three horns and bony frill around the back of its head, is one of the most recognizable dinosaurs. Its name is a combination of the Greek syllables tri-, meaning "three," kéras, meaning "horn," and ops, meaning "face. Triceratops had three horns: two massive ones above its eyes, and a smaller horn on its snout. The two brow horns appear to have twisted and lengthened as a Triceratops aged',
        size: 'Size: It grew up to 30 feet (9 meters) and weighed well over 11,000 lbs. (5,000 kg)',
        period: 'Time Period: Cretaceous',
        ate: 'Type of Eater: Herbivore',
        selector: 'p2'
    },
    {
        name: 'Velociraptor',
        description: 'Velociraptor means "swift seizer" in Latin. t was a bipedal, feathered carnivore with a long tail and an enlarged sickle-shaped claw on each hindfoot, which is thought to have been used to tackle and disembowel prey. Velociraptor can be distinguished from other dromaeosaurids by its long and low skull, with an upturned snout.',
        size: 'Size: adults measured up to 2.07 m (6.8 ft) long, 0.5 m (1.6 ft) high at the hip, and weighing up to 15 kg (33 lb)',
        period: 'Time Period: Cretaceous',
        ate: 'Type pf Eater: Carnivore',
        selector: 'p3'
    },
    {
        name: 'Stegosaurus',
        description: 'Stegosaurus is from Greek stegos which means roof and sauros which means lizard. These were large, heavily built, herbivorous quadrupeds with rounded backs, short fore limbs, long hind limbs, and tails held high in the air. Due to their distinctive combination of broad, upright plates and tail tipped with spikes. Its small brain was only the size of a walnut.',
        size: 'Size: up to 26-30 feet long (8-9 m), about 9 feet tall (2.75 m), and weighed about 6,800 pounds (3100 kg)',
        period: 'Time Period: Jurassic',
        ate: 'Type of Eater: Herbivore',
        selector: 'p4'
    },
    {
        name: 'Brachiosaurus',
        description: 'The name Brachiosaurus, in fact, means "arm lizard". Its long neck made it look like a giraffe, and its forelegs were longer than its hind legs. Brachiosaurus was likely a warm-blooded animal.',
        size: 'Size: about 82 feet (25 meters) long, and may have weighed about 62 tons (56 metric tons)',
        period: 'Time Period: Jurassic',
        ate: 'Type of Eater: Herbivore',
        selector: 'p5'
    }
];

// package constructor function
function Package(data){
    //Properties
    this.name = data.name;
    this.description = data.description;
    this.size = data.size;    
    this.period = data.period;
    this.ate = data.ate;
    this.selector = data.selector;

    //Methods
    this.getFormattedDownloads = function(){
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function(){
        return this.stars.toLocaleString();
    };
}

//write data to page
var writePackageInfo = function(package){
    //Get reference to DOM elements
    var selector = package.selector,
    nameEl = document.getElementById(selector + '-name'),
    descriptionEl = document.getElementById(selector + '-description'),
    sizeEl= document.getElementById(selector + '-size'),
    periodEl  =   document.getElementById(selector + '-period'),
    ateEl = document.getElementById(selector + '-ate');

    //Write package data to DOM elements
    nameEl.textContent = package.name;
    descriptionEl.textContent = package.description;
    sizeEl.textContent = package. size;
    periodEl.textContent = package.period;
    ateEl.textContent = package.ate;
};

//initialize the data 
var init = function(){
    for (var i = 0; i < data.length; i++) {
        var packageData = data[i];
        var package = new Package(packageData);

        writePackageInfo(package);
    }
};

init();