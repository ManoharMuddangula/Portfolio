let words = document.querySelectorAll(".word")
        words.forEach((word)=>{
            let letters = word.textContent.split("");
            word.textContent="";
            letters.forEach((letter)=>{
                let span = document.createElement("span");
                span.textContent = "letter";
                span.className = "letter";
                word.append(span);
            });
        });


        let currentWordIndex = 0;
        let maxWordIndex = words.length -1;
        words[currentWordIndex].style.opacity = "1";
        let changeText = () =>{
            let currentWord =words[currentWordIndex];
            let nextWord = currentWordIndex === maxWordIndex ? words[o] : words[currentWordIndex + 1];

            Array.from(currentWord.children).forEach((letter,i)=>{
                setTimeout(()=>{
                    letter.className = "letter out";
                },i * 80);
            });
            nextWord.style.opacity="1";
            Array.from(nextWord.children).forEach((letter,i)=>{
                letter.className = "letter behind"
                setTimeout(()=>{
                    letter.className = "letter in";
                },340 + i * 80);
            });
            currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
        };
        changeText();
        setInterval(changeText,3000)

        
        var tablinks = document.getElementsByClassName("tab-links");        
        var tabcontents = document.getElementsByClassName("tab-contents");        
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }