const news = []
async function getData() {
	const request = await fetch(
		'https://api.spaceflightnewsapi.net/v3/blogs'
		)
	const response = await request.json()
	news.push(...response)
	console.log(news)

}
getData()

function createNewsElement(newsCollection) {
	const newsTitle = document.createElement('h2')
	newsTitle.innerText = `${newsCollection.title}`
	newsTitle.classList.add('text-lg', 'text-center', 'dark:text-white')

	const newsSummary = document.createElement('p')
	newsSummary.innerText = `${newsCollection.summary}`

	// ? news container
	const newsContainer = document.getElementById('news')
	newsContainer.classList.add('text-center')
	newsContainer.append(newsTitle, newsSummary)
}

for(let i of news) {
	createNewsElement(i)
}