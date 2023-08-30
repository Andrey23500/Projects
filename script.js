class ArrangeBox {
  myConstructor(name) {
    this.containerName = name;
    this.potentialList.sort();
    this.#renderControl();
    this.#renderLists();
  }
  potentialList = ["Apple", "Banan", "Orange", "vegetable"];
  selectedList = [];
  currentItem = "";

  #renderControl() {
    //*****ARRANGE BOX******/
    let arrangeBox = document.createElement("div");
    arrangeBox.classList.add("arrangeBox");
    arrangeBox.id = "arrangeBox";
    //*****POTENTIAL CONTROL******/
    let potential = document.createElement("div");
    potential.classList.add("potential");
    potential.id = "potential";
    let potentialTitle = document.createElement("h2");
    potentialTitle.innerHTML = "Available";
    //*****POTENTIAL SEARCH******/
    let searchBlockPotential = document.createElement("form");
    searchBlockPotential.classList.add("searchBlockPotential", "searchBlock");
    let searchPotential = document.createElement("input");
    searchPotential.type = "search";
    searchPotential.placeholder = "Search by name";
    searchPotential.classList.add("searchPotential");
    searchPotential.id = "searchPotential";
    searchPotential.addEventListener("input", object.#search.bind(object));
    let potentialWrapper = document.createElement("div");
    potentialWrapper.classList.add("potentialWrapper");
    potentialWrapper.id = "potentialWrapper";
    let potentialInput = document.createElement("div");
    potentialInput.classList.add("potentialInput", "inputs");
    potentialInput.id = "potentialInput";
    let potentialButton = document.createElement("button");
    potentialButton.innerHTML = "Random List";
    potentialButton.classList.add("createList", "btn");
    potentialButton.addEventListener("click", object.randomList.bind(object));
    //*****POTENTIAL BUTTONS******/
    let potentialSortBtns = document.createElement("div");
    potentialSortBtns.classList.add("potentialSortBtns");
    let potentialBtnSortTop = document.createElement("button");
    potentialBtnSortTop.classList.add("potentialBtnSortTop", "btn");
    potentialBtnSortTop.innerHTML = '<img src="./assets/img/top.png">';
    potentialBtnSortTop.addEventListener(
      "click",
      object.#elemToTop.bind(object)
    );
    let potentialBtnSortFirst = document.createElement("button");
    potentialBtnSortFirst.classList.add("potentialBtnSortFirst", "btn");
    potentialBtnSortFirst.innerHTML = '<img src="./assets/img/top2.png">';
    potentialBtnSortFirst.addEventListener(
      "click",
      object.#elemToFirst.bind(object)
    );
    let potentialBtnSortLast = document.createElement("button");
    potentialBtnSortLast.classList.add("potentialBtnSortLast", "btn");
    potentialBtnSortLast.innerHTML = '<img src="./assets/img/down2.png">';
    potentialBtnSortLast.addEventListener(
      "click",
      object.#elemToLast.bind(object)
    );
    let potentialBtnSortDown = document.createElement("button");
    potentialBtnSortDown.classList.add("potentialBtnSortDown", "btn");
    potentialBtnSortDown.innerHTML = '<img src="./assets/img/down.png">';
    potentialBtnSortDown.addEventListener(
      "click",
      object.#elemToDown.bind(object)
    );
    let potentialBtnSortClear = document.createElement("button");
    potentialBtnSortClear.classList.add(
      "potentialBtnSortClear",
      "btn",
      "danger"
    );
    potentialBtnSortClear.innerHTML = '<img src="./assets/img/delete.png">';
    potentialBtnSortClear.addEventListener("click", object.clear.bind(object));
    potentialSortBtns.appendChild(potentialBtnSortTop);
    potentialSortBtns.appendChild(potentialBtnSortFirst);
    potentialSortBtns.appendChild(potentialBtnSortLast);
    potentialSortBtns.appendChild(potentialBtnSortDown);
    potentialSortBtns.appendChild(potentialBtnSortClear);
    searchBlockPotential.appendChild(searchPotential);
    potential.appendChild(potentialTitle);
    potential.appendChild(searchBlockPotential);
    potentialWrapper.appendChild(potentialSortBtns);
    potentialWrapper.appendChild(potentialInput);
    potential.appendChild(potentialWrapper);
    potential.appendChild(potentialButton);
    arrangeBox.appendChild(potential);
    //*****BUTTONS******/
    let buttons = document.createElement("div");
    buttons.classList.add("buttons");
    let btnAddOne = document.createElement("button");
    btnAddOne.classList.add("addOne", "btn");
    btnAddOne.innerHTML = '<img src="./assets/img/right.png">';
    btnAddOne.addEventListener("click", object.#oneToSelected.bind(object));
    let btnAddAll = document.createElement("button");
    btnAddAll.classList.add("addAll", "btn");
    btnAddAll.innerHTML = '<img src="./assets/img/right2.png">';
    btnAddAll.addEventListener("click", object.#allToSelected.bind(object));
    let btnRemoveOne = document.createElement("button");
    btnRemoveOne.classList.add("removeOne", "btn");
    btnRemoveOne.innerHTML = '<img src="./assets/img/left.png">';
    btnRemoveOne.addEventListener("click", object.#oneToAvailable.bind(object));
    let btnRemoveAll = document.createElement("button");
    btnRemoveAll.classList.add("removeAll", "btn");
    btnRemoveAll.innerHTML = '<img src="./assets/img/left2.png">';
    btnRemoveAll.addEventListener("click", object.#allToAvailable.bind(object));
    buttons.appendChild(btnAddOne);
    buttons.appendChild(btnAddAll);
    buttons.appendChild(btnRemoveAll);
    buttons.appendChild(btnRemoveOne);
    arrangeBox.appendChild(buttons);
    //*****SELECTED CONTROL******/
    let selected = document.createElement("div");
    selected.classList.add("selected");
    selected.id = "selected";
    let selectedTitle = document.createElement("h2");
    selectedTitle.innerHTML = "Selected";
    //*****POTENTIAL SEARCH******/
    let searchBlockSelect = document.createElement("form");
    searchBlockSelect.classList.add("searchBlockSelect", "searchBlock");
    let searchSelect = document.createElement("input");
    searchSelect.type = "text";
    searchSelect.placeholder = "Search by name";
    searchSelect.id = "searchSelect";
    searchSelect.classList.add("searchSelect");
    searchSelect.addEventListener("input", object.#search.bind(object));
    let selectedWrapper = document.createElement("div");
    selectedWrapper.classList.add("selectedWrapper");
    selectedWrapper.id = "selectedWrapper";
    let selectedInput = document.createElement("div");
    selectedInput.classList.add("selectedInput", "inputs");
    selectedInput.id = "selectedInput";
    //*****SELECTED BUTTONS******/
    let selectSortBtns = document.createElement("div");
    selectSortBtns.classList.add("selectSortBtns");
    let selectBtnSortTop = document.createElement("button");
    selectBtnSortTop.classList.add("selectBtnSortTop", "btn");
    selectBtnSortTop.innerHTML = '<img src="./assets/img/top.png">';
    selectBtnSortTop.addEventListener("click", object.#elemToTop.bind(object));
    let selectBtnSortFirst = document.createElement("button");
    selectBtnSortFirst.classList.add("selectBtnSortFirst", "btn");
    selectBtnSortFirst.innerHTML = '<img src="./assets/img/top2.png">';
    selectBtnSortFirst.addEventListener(
      "click",
      object.#elemToFirst.bind(object)
    );
    let selectBtnSortLast = document.createElement("button");
    selectBtnSortLast.classList.add("selectBtnSortLast", "btn");
    selectBtnSortLast.innerHTML = '<img src="./assets/img/down2.png">';
    selectBtnSortLast.addEventListener(
      "click",
      object.#elemToLast.bind(object)
    );
    let selectBtnSortDown = document.createElement("button");
    selectBtnSortDown.classList.add("selectBtnSortDown", "btn");
    selectBtnSortDown.innerHTML = '<img src="./assets/img/down.png">';
    selectBtnSortDown.addEventListener(
      "click",
      object.#elemToDown.bind(object)
    );
    selectSortBtns.appendChild(selectBtnSortTop);
    selectSortBtns.appendChild(selectBtnSortFirst);
    selectSortBtns.appendChild(selectBtnSortLast);
    selectSortBtns.appendChild(selectBtnSortDown);
    searchBlockSelect.appendChild(searchSelect);
    selected.appendChild(selectedTitle);
    selected.appendChild(searchBlockSelect);
    selectedWrapper.appendChild(selectedInput);
    selectedWrapper.appendChild(selectSortBtns);
    selected.appendChild(selectedWrapper);
    arrangeBox.appendChild(selected);
    document.getElementById(this.containerName).appendChild(arrangeBox);
  }
  #renderLists() {
    let potentialInput = document.getElementById("potentialInput");
    potentialInput.innerHTML = "";
    for (let i = 0; i < this.potentialList.length; i++) {
      let item = document.createElement("p");
      item.innerText = this.potentialList[i];
      potentialInput.appendChild(item);
      item.className = "selectElem";
      item.addEventListener("click", object.selectCurrentItem.bind(object));
    }
    let selectedInput = document.getElementById("selectedInput");
    selectedInput.innerHTML = "";
    for (let i = 0; i < this.selectedList.length; i++) {
      let item = document.createElement("p");
      item.innerText = this.selectedList[i];
      selectedInput.appendChild(item);
      item.className = "selectElem";
      item.addEventListener("click", object.selectCurrentItem.bind(object));
    }
  }
  #oneToSelected() {
    if (this.potentialList.length !== 0 && this.currentItem !== "") {
      for (let i = 0; i < this.potentialList.length; i++) {
        if (this.potentialList[i] == this.currentItem) {
          this.selectedList.push(this.potentialList[i]);
          this.potentialList.splice(i, 1);
        }
      }
      this.currentItem = "";
      this.#renderLists();
    }
  }
  #oneToAvailable() {
    if (this.selectedList.length !== 0 && this.currentItem !== "") {
      for (let i = 0; i < this.selectedList.length; i++) {
        if (this.selectedList[i] == this.currentItem) {
          this.potentialList.push(this.selectedList[i]);
          this.selectedList.splice(i, 1);
        }
      }
      this.currentItem = "";
      this.#renderLists();
    }
  }
  #allToSelected() {
    if (this.potentialList.length !== 0) {
      for (let i = 0; i < this.potentialList.length; i++) {
        this.selectedList.push(this.potentialList[i]);
      }
      this.potentialList = [];
      this.#renderLists();
    }
  }
  #allToAvailable() {
    if (this.selectedList.length !== 0) {
      for (let i = 0; i < this.selectedList.length; i++) {
        this.potentialList.push(this.selectedList[i]);
      }
      this.selectedList = [];
      this.#renderLists();
    }
  }
  #elemToFirst() {
    if (event.target.classList.contains("potentialBtnSortFirst")) {
      if (
        this.currentItem !== "" &&
        this.potentialList.indexOf(this.currentItem) !== 0
      ) {
        let removed = this.potentialList.splice(
          this.potentialList.indexOf(this.currentItem),
          1
        );
        this.potentialList.unshift(removed[0]);
      }
    } else if (event.target.classList.contains("selectBtnSortFirst")) {
      if (
        this.currentItem !== "" &&
        this.selectedList.indexOf(this.currentItem) !== 0
      ) {
        let removed = this.selectedList.splice(
          this.selectedList.indexOf(this.currentItem),
          1
        );
        this.selectedList.unshift(removed[0]);
      }
    }
    this.currentItem = "";
    this.#renderLists();
  }
  #elemToLast() {
    if (event.target.classList.contains("potentialBtnSortLast")) {
      if (
        this.currentItem !== "" &&
        this.potentialList.indexOf(this.currentItem) !==
          this.potentialList.length - 1
      ) {
        let removed = this.potentialList.splice(
          this.potentialList.indexOf(this.currentItem),
          1
        );
        this.potentialList.push(removed[0]);
      }
    } else if (event.target.classList.contains("selectBtnSortLast")) {
      if (
        this.currentItem !== "" &&
        this.selectedList.indexOf(this.currentItem) !==
          this.selectedList.length - 1
      ) {
        let removed = this.selectedList.splice(
          this.selectedList.indexOf(this.currentItem),
          1
        );
        this.selectedList.push(removed[0]);
      }
    }
    this.currentItem = "";
    this.#renderLists();
  }
  #elemToTop() {
    if (event.target.classList.contains("potentialBtnSortTop")) {
      if (
        this.currentItem !== "" &&
        this.potentialList.indexOf(this.currentItem) !== 0
      ) {
        let index = this.potentialList.indexOf(this.currentItem);
        let current = this.potentialList[index];
        let pred = this.potentialList[index - 1];
        this.potentialList[index - 1] = current;
        this.potentialList[index] = pred;
      }
    } else if (event.target.classList.contains("selectBtnSortTop")) {
      if (
        this.currentItem !== "" &&
        this.selectedList.indexOf(this.currentItem) !== 0
      ) {
        let index = this.selectedList.indexOf(this.currentItem);
        let current = this.selectedList[index];
        let pred = this.selectedList[index - 1];
        this.selectedList[index - 1] = current;
        this.selectedList[index] = pred;
      }
    }
    this.currentItem = "";
    this.#renderLists();
  }
  #elemToDown() {
    if (event.target.classList.contains("potentialBtnSortDown")) {
      if (
        this.currentItem !== "" &&
        this.potentialList.indexOf(this.currentItem) !==
          this.potentialList.length - 1
      ) {
        let index = this.potentialList.indexOf(this.currentItem);
        let current = this.potentialList[index];
        let next = this.potentialList[index + 1];
        this.potentialList[index + 1] = current;
        this.potentialList[index] = next;
      }
    } else if (event.target.classList.contains("selectBtnSortDown")) {
      if (
        this.currentItem !== "" &&
        this.selectedList.indexOf(this.currentItem) !==
          this.selectedList.length - 1
      ) {
        let index = this.selectedList.indexOf(this.currentItem);
        let current = this.selectedList[index];
        let next = this.selectedList[index + 1];
        this.selectedList[index + 1] = current;
        this.selectedList[index] = next;
      }
    }
    this.currentItem = "";
    this.#renderLists();
  }

  #search() {
    if (event.target.classList.contains("searchPotential")) {
      let value = event.target.value.toLowerCase();
      let listItems = document.getElementById("potentialInput").childNodes;

      listItems.forEach((item) => {
        let text = item.textContent.toLowerCase();
        if (text.includes(value)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    } else if (event.target.classList.contains("searchSelect")) {
      let value = event.target.value.toLowerCase();
      let listItems = document.getElementById("selectedInput").childNodes;

      listItems.forEach((item) => {
        let text = item.textContent.toLowerCase();
        if (text.includes(value)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    }
  }
  ///
  randomList() {
    this.potentialList = [];
    if (this.selectedList.length !== 0) this.selectedList = [];
    let length = Math.random() * (10 - 2) + 2;
    for (let i = 0; i < length; i++) {
      let abc = "abcdefghijklmnopqrstuvwxyz";
      let word = "";
      while (word.length < 6) {
        word += abc[Math.floor(Math.random() * abc.length)];
      }
      this.potentialList.push(word);
    }
    this.potentialList.sort();
    object.#renderLists();
  }
  selectCurrentItem(event) {
    let elements = document.getElementsByClassName("selectElem");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove("active");
    }
    if (event.target.classList.contains("selectElem")) {
      event.target.classList.add("active");
      this.currentItem = event.target.innerText;
    }
  }
  clear() {
    this.selectedList.forEach((el) => {
      this.potentialList.push(el);
    });
    this.selectedList = [];
    this.potentialList.sort();
    object.#renderLists();
  }
}

let object = new ArrangeBox();
object.myConstructor("container");
