import one from "./assets/1.jpg"
import two from "./assets/2.jpg"
import three from "./assets/3.jpg"
import four from "./assets/4.jpg"
import five from "./assets/5.jpg"
import six from "./assets/6.jpg"

import {
	init,
	classModule,
	propsModule,
	styleModule,
	eventListenersModule,
	h
} from "snabbdom";

const patch = init([
	classModule,
	propsModule,
	styleModule,
	eventListenersModule
]);

const app = document.getElementById("app");

const dialogs = [
	{
		img: one,
		name: "Jane",
		message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
	},
	{
		img: two,
		name: "Alice",
		message: "Qui quibusdam quo ratione repellendus sit tenetur ut voluptatum?"
	},
	{
		img: three,
		name: "Mark",
		message: "distinctio ducimus earum est et expedita "
	},
	{
		img: four,
		name: "Caroline",
		message: "provident quaerat quam qui, quibusdam sint vero."
	},
	{
		img: five,
		name: "Beth",
		message: "Qui quibusdam quo ratione repellendus sit tenetur ut voluptatum?"
	},
	{
		img: six,
		name: "Jacob",
		message: "consectetur adipisicing elit."
	},
];

const makeListItem = (img, name, message) => {
	const imgNode = h("img",
		{
			style: {
				width: "80px",
				height: "80px",
				borderRadius: "50%",
				flexShrink: 0,
				background: `url(${img}) center center / cover no-repeat`
			}
		});

	const textNode = h("div", { style: { marginLeft: "40px" } },
		[
			h("div", { style: { fontSize: "20px", fontWeight: "600" }}, name),
			h("div", { style: { fontSize: "18px", color: "#ccc", marginTop: "10px" }}, message)
		]);

	return h("li", {
		style: {
			width: "100%",
			display: "flex",
			padding: "30px 0",
			alignItems: "center",
			borderBottom: "1px solid rgba(204,204,204,0.23)"

		}
	}, [imgNode, textNode]);
};

const dialogsNodes = dialogs.map(el => {
	return makeListItem(el.img, el.name, el.message)
});

const vnode = h("div", {
		style: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			width: "100vw",
			height: "100vh",
			backgroundColor: "#cfcfcf"
		}
	},
	[
		h("ul", {
			style: {
				position: "absolute",
				width: "600px",
				padding: "0 30px",
				backgroundColor: "#fff"
			}
		}, dialogsNodes)
	]
);

patch(app, vnode);
