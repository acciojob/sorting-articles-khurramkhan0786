//your JS code here. If required.
const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Function to remove 'A', 'An', 'The' from the beginning of band names
function stripArticle(name) {
    return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands alphabetically, ignoring "A", "An", "The"
const sortedBands = bands.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));

// Insert sorted bands into the UL element
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('bands').innerHTML = 
        sortedBands.map(band => `<li>${band}</li>`).join('');
});