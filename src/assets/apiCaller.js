const key = "api-key=WFHYAaR8G81sIvCFzUEmrAqodGRMVOq5";
const TopURI = "https://api.nytimes.com/svc/topstories/v2/";
const searchURI = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="

export async function fetchTimesTopStories(whatToView){
    const response = await fetch(TopURI + whatToView + "?" + key);
    const data = await response.json();
    return data.results;
    
}
export async function fetchTimesArticleSearch(query,sort){
    // var sort = "newest"
    // sort = isort
    let data;
    if(sort == null){
        const response = await fetch(searchURI + query + "&" + key);
        data = await response.json();
    }
    else {
        const response = await fetch(searchURI + query + "&sort=" + sort + "&" + key);
        data = await response.json();
       
    }
    return data.response.docs;

}

