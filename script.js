let pos;

let imgId;

function HideCards()
{
	RollPos();

	document.getElementById('i1').src = "Card1.png";

	document.getElementById('i2').src = "Card1.png";

	document.getElementById('i3').src = "Card1.png";
}

function RollPos()
{
	pos = Math.floor(Math.random() * 3 + 1);

	console.log(pos);
}

function ShowCard()
{
	if(imgId == "i1")
	{
		if(pos == 1)
		{
			document.getElementById('i1').src = "dogCard.png";

			document.getElementById('i2').src = "catCard.png";

			document.getElementById('i3').src = "catCard.png";
		}
		else
		{
			document.getElementById('i1').src = "catCard.png";
		}
	}
	else if(imgId == "i2")
	{
		if(pos == 2)
		{
			document.getElementById('i1').src = "catCard.png";

			document.getElementById('i2').src = "dogCard.png";

			document.getElementById('i3').src = "catCard.png";
		}
		else
		{

			document.getElementById('i2').src = "catCard.png";

		}
	}
	else if(imgId == "i3")
	{
		if(pos == 3)
		{
			document.getElementById('i1').src = "catCard.png";

			document.getElementById('i2').src = "catCard.png";

			document.getElementById('i3').src = "dogCard.png";
		}
		else
		{
			document.getElementById('i3').src = "catCard.png";
		}
	}
}

function GetId(clickedId)
{
	console.log(clickedId);

	imgId = clickedId;

	ShowCard();
}