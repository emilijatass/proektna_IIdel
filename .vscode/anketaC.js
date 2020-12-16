
        var comments21;


        if (window.localStorage.getItem("comment21")) {
          comments21 = JSON.parse(window.localStorage.getItem("comment21"));
        } else {
          comments21 = [];
        }
        function storeComm21() {
        var date = new Date().toLocaleString();
        var singleComment = { value: comm21.value, date: date };

        comments21.push(singleComment);
        console.log(comments21);
        window.localStorage.setItem("comment21", JSON.stringify(comments21));

        load();
      }

      function load() {
        var first = document.getElementById("labels21");
        while (first.firstChild) {
          first.removeChild(first.lastChild);
        }


        var comments21 = JSON.parse(window.localStorage.getItem("comment21"));

        console.log(comments21);
        if (comments21) {
          comments21.forEach((element) => {
            var y = document.createElement("LABEL");
            var x = document.createElement("BR");
            var p = document.createElement("BR");
            var z = document.createElement("LABEL");

            var node = document.createTextNode(element.value);
            var nodeDate = document.createTextNode(element.date);
            y.style.fontWeight = "bold";
            y.appendChild(node);
            z.appendChild(nodeDate);

            document.getElementById("labels21").appendChild(y);
            document.getElementById("labels21").appendChild(x);
            document.getElementById("labels21").appendChild(p);
            document.getElementById("labels21").appendChild(z);
            document.getElementById("labels21").appendChild(x);
          });
        }
      }
      