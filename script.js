// ************************TABS SECTION******************
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
    // Remove all show and border classes
    removeBorder();
    removeShow();
    // Add border to current tab item
    this.classList.add('tab-border');
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItem.classList.add('show');
}
// Remove bottom borders from all tab items
function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove('tab-border');
    });
}

// Remove show class from all content items
function removeShow() {
    tabContentItems.forEach(item => {
        item.classList.remove('show');
    });
}

// Listen for tab item click
tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
});

// Resources

// ******************************FAQS SECTION****************************

// QUESTION 1
const targetDiv = document.getElementById("answer1");
const btn = document.getElementById("question1");
btn.onclick = function () {
	if(targetDiv.style.display !== "none"){
		targetDiv.style.display = "none";
	}else{
		targetDiv.style.display = "block";
	}
};
// QUESTION 2
const question2 = document.getElementById("answer2");
const question2btn = document.getElementById("question2");
question2btn.onclick = function () {
	if(question2.style.display !== "none"){
		question2.style.display = "none";
	}else{
		question2.style.display = "block";
	}
};
// QUESTION 3
const question3 = document.getElementById("answer3");
const question3btn = document.getElementById("question3");
question3btn.onclick = function () {
	if(question3.style.display !== "none"){
		question3.style.display = "none";
	}else{
		question3.style.display = "block";
	}
};
// QUESTION 4
const question4 = document.getElementById("answer4");
const question4btn = document.getElementById("question4");
question4btn.onclick = function () {
	if(question4.style.display !== "none"){
		question4.style.display = "none";
	}else{
		question4.style.display = "block";
	}
};
// QUESTION 5
const question5 = document.getElementById("answer5");
const question5btn = document.getElementById("question5");
question5btn.onclick = function () {
	if(question5.style.display !== "none"){
		question5.style.display = "none";
	}else{
		question5.style.display = "block";
	}
};
// QUESTION 6
const question6 = document.getElementById("answer6");
const question6btn = document.getElementById("question6");
question6btn.onclick = function () {
	if(question6.style.display !== "none"){
		question6.style.display = "none";
	}else{
		question6.style.display = "block";
	}
};