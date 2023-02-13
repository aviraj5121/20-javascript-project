function quote()
    {
        var arr = ['Nothing is impossible, the word itself says I am possible"! -- Audrey Hepburn',
                    'I  learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. -- Maya Angelou',
                    'Perfection is not attainable, but if we chase perfection we can catch excellence. -- Vince Lombardi',
                    'Life is 20 percent what happens to me and 90 percent of how I react to it. -- Charles Swindol',
                    'To handle yourself, use your head; to handle others, use your heart. -- Eleanor Roosevelt',
                    'Too many of us are not living our dreams because we are living our fears. -- Les Brown',
                    'Alone, we can do so little; together we can do so much. -- Helen Keller']
    
        let x = arr[Math.floor(Math.random()*arr.length)]  
        document.getElementById("a").innerHTML = x;
    }