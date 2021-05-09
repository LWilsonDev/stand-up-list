function getCurrentAttendeeNames() {
  const displayDiv = document.querySelectorAll(".YUGmGb");
  const namesText = [];
  displayDiv.forEach((div) => {
    namesText.push(div.innerText);
  });
  return namesText;
}

// Called on click of the extension to initialize list
function addList() {
  // collect names from google meet display
  const namesText = getCurrentAttendeeNames();
  // make our list container and the show/hide button
  let listContainer = makeContainer();
  let hideBtn = makeHideButton();
  listContainer.append(hideBtn);

  // add names and checkboxes to container
  namesText.forEach((name) => {
    const displayItem = makeDisplayItem(name);
    listContainer.append(displayItem);
  });

  // add our list container to the screen
  const control = document.querySelectorAll(".Jrb8ue");
  control.forEach((c) => {
    c.append(listContainer);
  });
}

function makeHideButton() {
  const button = document.createElement("BUTTON");
  button.id = "hideBtn";
  button.innerHTML = "Hide list";
  button.onclick = function () {
    let person = document.getElementsByClassName("person");
    if (button.innerHTML == "Hide list") {
      for (i = 0; i < person.length; i++) {
        person[i].style.display = "none";
      }
      button.innerHTML = "Show list";
    } else {
      for (i = 0; i < person.length; i++) {
        person[i].style.display = "block";
      }
      button.innerHTML = "Hide list";
    }
  };
  return button;
}

function makeContainer() {
  const existing = document.getElementById("listContainer");
  if (existing) {
    return existing;
  }
  const container = document.createElement("DIV");
  container.id = "listContainer";
  return container;
}

function setButtonChecked(button) {
  button.setAttribute("data-checked", "true");
  button.className = "person checked";
  return button;
}

function unsetButtonChecked(button) {
  button.setAttribute("data-checked", "false");
  button.className = "person";
  return button;
}

function makeDisplayItem(name) {
  let button = document.createElement("BUTTON");
  button.innerText = name;
  button.className = "person";
  button.onclick = function () {
    if (button.dataset.checked == "true") {
      button = unsetButtonChecked(button);
    } else if (button.dataset.checked == "false" || !button.dataset.checked) {
      button = setButtonChecked(button);
    }
  };
  return button;
}

function updateList() {
  // get displayed names from Meet
  const currentAttendees = getCurrentAttendeeNames();
  let buttons = document.getElementsByClassName("person");
  let peopleData = {};
  for (i = 0; i < buttons.length; i++) {
    const name = buttons[i].innerText;
    const checked = buttons[i].getAttribute("data-checked");
    peopleData[name] = checked;
  }

  const peopleDataNames = Object.keys(peopleData);
  const container = document.getElementById("listContainer");
  for (i = 0; i < currentAttendees.length; i++) {
    const exists = peopleDataNames.includes(currentAttendees[i]);
    if (!exists) {
      const newButton = makeDisplayItem(currentAttendees[i]);
      container.append(newButton);
    }
  }
}

if (document.getElementById("listContainer")) {
  updateList();
} else {
  addList();
}

// Select the node that will be observed for mutations to update list when someone joins
const targetNodes = document.getElementsByClassName("zWfAib");
const targetNode = targetNodes[0];
const config = {childList: true};

const callback = function (mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      updateList();
    }
  }
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
