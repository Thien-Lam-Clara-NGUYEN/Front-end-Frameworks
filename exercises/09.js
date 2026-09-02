// ## Part 2 — Modules, Array Methods, async/await, Optional Chaining
// ### Exercise 9 — Optional Chaining and Nullish Coalescing

const movie1 = {
  title: "Inception",
  tagline: "Your mind is the scene of the crime.",
  director: { name: "Christopher Nolan" },
  cast: [{ name: "Leonardo DiCaprio" }, { name: "Elliot Page" }],
};

const movie2 = {
  title: "Unknown Film",
  tagline: "",
  // no director, no cast
};

// 1.
const directorName = movie2.director?.name;
console.log(directorName); 

// 2. 
const tagline = movie2.tagline || "No tagline";
console.log(tagline);

// 3. 
const firstCastName = movie2.cast?.[0]?.name;
console.log(firstCastName);

// 4. 
const castDisplay = movie2.cast?.[0]?.name ?? "Unknown cast";
console.log(castDisplay);

// 5. 
function formatPosterUrl(movie) {
  return movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://placehold.co/500x750?text=No+Image";
}

const tmdbMovie        = { title: "Inception", poster_path: "/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg" };
const tmdbMovieNoPoster = { title: "Obscure Film", poster_path: null };

console.log(formatPosterUrl(tmdbMovie));         // https://image.tmdb.org/t/p/w500/oYuLEt3...
console.log(formatPosterUrl(tmdbMovieNoPoster)); // https://placehold.co/500x750?text=No+Image
