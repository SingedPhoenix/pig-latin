$(function() {
  $("form#form1").submit(function(event) {
      event.preventDefault();
      var input = $("#input").val();
      var reglarSentence = input.split(" ")
      var newSentence = [];


      for (var i = 0; i < reglarSentence.length; i++) {
        var examineWord = reglarSentence[i];
        if (/[^a-zA-Z'].*/i.test(examineWord)) {
          newSentence.push(examineWord);
        } else if (/^[aeiouy].*/i.test(examineWord)) {
            var pigWord = examineWord + "way";
            newSentence.push(pigWord);
        } else {

        loop2:
          for (var j = 0; j < examineWord.length; j++) {
            console.log(newSentence);
            if (/[aeiouy]+/i.test(examineWord.charAt(j))) {
              if ((examineWord.charAt(j) == "u") && ((examineWord.charAt(j-1) == "q"))) {
                var beforeVowel = examineWord.slice(0, j+1);

                var afterVowel = examineWord.slice(j+1);

                var pigWord = afterVowel + beforeVowel + "ay";

                newSentence.push(pigWord);

                break loop2;
              } else {
              var beforeVowel = examineWord.slice(0, j);

              var afterVowel = examineWord.slice(j);

              var pigWord = afterVowel + beforeVowel + "ay";

              newSentence.push(pigWord);

              break loop2;
            } //INNER IF
          }
            } //INNER FOR
          } //OUTER ELSE
        }//OUTER FOR




        newSentence = newSentence.join(" ");
        newSentence = newSentence.toLowerCase();
        newSentence = newSentence.replace(/^\w/, function (cap) {
          return cap.toUpperCase();
        });
        $("#output").text(newSentence + ".");

      });
  });
