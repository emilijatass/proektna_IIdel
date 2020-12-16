var comments9;


        if (window.localStorage.getItem("comment9")) {
          comments9 = JSON.parse(window.localStorage.getItem("comment9"));
        } else {
          comments9 = [];
        }
        function storeComm9() {
        var date = new Date().toLocaleString();
        var singleComment = { value: comm9.value, date: date };

        comments9.push(singleComment);
        console.log(comments9);
        window.localStorage.setItem("comment9", JSON.stringify(comments9));

        load();
      }

      function load() {
        var first = document.getElementById("labels9");
        while (first.firstChild) {
          first.removeChild(first.lastChild);
        }


        var comments9 = JSON.parse(window.localStorage.getItem("comment9"));

        console.log(comments9);
        if (comments9) {
          comments9.forEach((element) => {
            var y = document.createElement("LABEL");
            var x = document.createElement("BR");
            var p = document.createElement("BR");
            var z = document.createElement("LABEL");

            var node = document.createTextNode(element.value);
            var nodeDate = document.createTextNode(element.date);
            y.style.fontWeight = "bold";
            y.appendChild(node);
            z.appendChild(nodeDate);

            document.getElementById("labels9").appendChild(y);
            document.getElementById("labels9").appendChild(x);
            document.getElementById("labels9").appendChild(p);
            document.getElementById("labels9").appendChild(z);
            document.getElementById("labels9").appendChild(x);
          });
        }
      }
      function myFunction(x) {
        x.style.background = "pink";
      }
      