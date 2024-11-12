document.addEventListener("DOMContentLoaded", (event) => {
  verovio.module.onRuntimeInitialized = () => {
    let tk = new verovio.toolkit();

    console.log("Verovio initialized.");

    tk.setOptions({
      //scale: 100,
      //landscape: true,
      //adjustPageWidth: true,
    });

    console.log("Verovio options:", tk.getOptions());

    fetch("https://www.verovio.org/examples/downloads/Schubert_Lindenbaum.mei")
      .then((response) => response.text())
      .then((meiXML) => {
        let svg = tk.renderData(meiXML, {});
        document.getElementById("notation").innerHTML = svg;

        // CHALLENGE 1: All note stems in the rendered score should be colored pink.

        // CHALLENGE 2: Clicking on a notehead should toggle its color red or black.

        // CHALLENGE 3: Clicking on a "highlight" button should draw a line or curve that crosses all currently red noteheads.
      });
  };
});
