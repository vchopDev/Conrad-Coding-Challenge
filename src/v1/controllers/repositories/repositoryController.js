const axios = require("axios");

const GetRepositories = async (req, res) => {
  try {
    const { search } = req.query; 
    const result = await axios.get(`https://api.github.com/search/repositories?q=${search}`);
    
    let repos = result.data.items.map(x => ParseRepositories(x))
    return res.status(200).json({ count: repos.length, result: repos});
  } catch (error) {
    //TODO: Log
    return res.status(500).json({ error: error.message });
  }
};


const ParseRepositories = repository => {
  return {
    id: repository.id,
    name: repository.name,
    fullname: repository.full_name,
    description: repository.description,
    url: repository.html_url
  }
}



module.exports = {
  GetRepositories
};
