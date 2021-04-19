// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: yellow; icon-glyph: magic;
// The URL of your JSON endpoint
const endpoint = "https://spreadsheets.google.com/feeds/cells/1gq8DhOg3tjKK5gIP_8a-eUD7nvdn7EqLsnCjfgWFXmI/5/public/full?alt=json"


// Function that performs the request to the JSON endpoint
async function loadItems() {
	let at = endpoint
	let req = new Request(at)
	let corpo = await req.loadJSON()
	// We return just the cells
	return corpo.feed.entry
}
// Request the spreadsheet data
let json = await loadItems()

// Obtaining the content of the exact cell we are looking for
Value = json[314].content["$t"]
log(json[314])

// Create the widget
let w = new ListWidget()
w.backgroundColor = new Color("#000098")


// Add the value to the widget
t = w.addText(Value)
t.textColor = Color.yellow()
t.font = new Font("Avenir-Heavy",10)


z = w.addText(Value)
z.textColor = Color.white()
z.font = new Font("Avenir-Heavy",10)
z.centerAlignText()


w.presentSmall()
Script.setWidget(w)
Script.complete()
