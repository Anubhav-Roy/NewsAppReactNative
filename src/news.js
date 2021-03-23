// Change YOUR_API_KEY_HERE to your apiKey
const url =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=7ea5264b8f71468498200eef0561eab0&pageSize=10&page=";

export async function getNews(pageNumber) {
  let result = await fetch(url+pageNumber.toString()).then(response => response.json());
  return result.articles;
}
