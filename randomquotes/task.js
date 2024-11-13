
let a=document.querySelector("div")

const quotesdata=[
    
    "నువ్వు దగ్గరగా ఉన్నప్పుడు ప్రేమతో నిండిపోయిన మనసు, ఇప్పుడు నువ్వు దూరమయ్యాక వేదనతో నిండిపోయింది.",
    "నీ జ్ఞాపకాలు నన్ను ఎంత కాలం బాధ పెడుతాయో అన్నదే నా మనసు ప్రశ్న.",
    "నువు నీ ప్రేమని తీసుకుపోయావు, కానీ దాని జ్ఞాపకాలు నన్ను వదల్లేదు.",
    "మొదటి ప్రేమ మధురంగా ఉంటుంది, అది గాయపడితే మాత్రం తీరని బాధగా మారుతుంది.",
    "Falling in love is easy, but losing the one you love is the hardest thing.",
    "Your smile fills my heart with an unforgettable melody of happiness",
    "In your love, I have found myself.",
    "Hearing your name makes my heart smile; having you close makes my life smile.",
    "Wanting to be with you every day and losing myself in your love teaches me the meaning of love.",
    "Love brings two people into one dream and lets them live as one heart."
]
 
function randomquotes(){

    let singlequote=Math.floor(Math.random()*quotesdata.length)
    a.textContent=quotesdata[singlequote]
}