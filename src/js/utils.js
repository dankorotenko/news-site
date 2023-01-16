import CyrillicToTranslit from 'cyrillic-to-translit-js';

const cyrillicToTranslit = new CyrillicToTranslit();


export function slugify(text) {
  return cyrillicToTranslit.transform(text, '-')
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

export function formatBlogPosts(
  posts,
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
    filterOnlyHelp = false,
    filterOutHelp = false,
  } = {}
) {
  const filteredPosts = posts.reduce((acc, post) => {
    const { date, draft, category } = post.frontmatter;
    //FilterOutDrafts if true
    if (filterOutDrafts && draft) return acc;

    if (filterOutHelp && category === 'Помощь') return acc;

    //filterOutFuturePosts if true
    if (filterOutFuturePosts && new Date(date) > new Date()) return acc;

    if (filterOnlyHelp && category !== 'Помощь') return acc;
    //add post to acc
    acc.push(post);

    return acc;
  }, []);

  //sort by data or randomize
  if (sortByDate) {
    filteredPosts.sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  //limit if number is passed
  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit);
  }

  return filteredPosts;
}


export function morePosts(amount = 0){
return amount+=3;
}