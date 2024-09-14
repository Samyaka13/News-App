import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";
import axios from "axios";
const basic = asyncHandler(async (req, res) => {
  res.send("Welcome to acowale news");
});
const getAllnews = asyncHandler(async (req, res) => {
  const page = req.query.page || 1;
  const { data } = await axios.get("https://gnews.io/api/v4/top-headlines", {
    params: {
      category: "general",
      token: process.env.GNEWS_API_KEY,
      lang: "en",
      max: 8,
      page: page,
    },
  });
  if (!data) {
    throw new ApiError(500, "Error fetching news");
  } else {
    res.send(data);
  }
});
const topNews = asyncHandler(async (req, res) => {
  const page = req.query.page || 1;
  const { data } = await axios.get("https://gnews.io/api/v4/top-headlines", {
    params: {
      category: "general",
      token: process.env.GNEWS_API_KEY,
      lang: "en",
      country: "in",
      max: 8,
      page: page,
    },
  });
  if (!data) {
    throw new ApiError(500, "Error fetching news");
  } else {
    res.send(data);
  }
});
const search = asyncHandler(async (req, res) => {
  const query = req.query.q || "";
  const { data } = await axios.get("https://gnews.io/api/v4/top-headlines", {
    params: {
      category: "general",
      token: process.env.GNEWS_API_KEY,
      q: query,
      lang: "en",
      country: "in",
      max: 10,
    },
  });
  if (!data) {
    throw new ApiError(500, "Error fetching news");
  } else {
    // res.send(data);
    res.json(data);
  }
});
const searchT = asyncHandler(async (req, res) => {
  const query = req.query.q || "";
  const { data } = await axios.get("https://gnews.io/api/v4/top-headlines", {
    params: {
      category: "technology",
      token: process.env.GNEWS_API_KEY,
      q: query,
      lang: "en",
      country: "in",
      max: 10,
    },
  });
  if (!data) {
    throw new ApiError(500, "Error fetching news");
  } else {
    // res.send(data);
    res.json(data);
  }
});
const searchW = asyncHandler(async (req, res) => {
  const query = req.query.q || "";
  const { data } = await axios.get("https://gnews.io/api/v4/top-headlines", {
    params: {
      category: "world",
      token: process.env.GNEWS_API_KEY,
      q: query,
      lang: "en",
      max: 10,
    },
  });
  if (!data) {
    throw new ApiError(500, "Error fetching news");
  } else {
    // res.send(data);
    res.json(data);
  }
});
const searchS = asyncHandler(async (req, res) => {
  const query = req.query.q || "";
  const { data } = await axios.get("https://gnews.io/api/v4/top-headlines", {
    params: {
      category: "sports",
      token: process.env.GNEWS_API_KEY,
      q: query,
      lang: "en",
      max: 10,
    },
  });
  if (!data) {
    throw new ApiError(500, "Error fetching news");
  } else {
    // res.send(data);
    res.json(data);
  }
});
const searchE = asyncHandler(async (req, res) => {
  const query = req.query.q || "";
  const { data } = await axios.get("https://gnews.io/api/v4/top-headlines", {
    params: {
      category: "entertainment",
      token: process.env.GNEWS_API_KEY,
      q: query,
      lang: "en",
      max: 10,
    },
  });
  if (!data) {
    throw new ApiError(500, "Error fetching news");
  } else {
    // res.send(data);
    res.json(data);
  }
});

export {
  basic,
  getAllnews,
  searchT,
  searchE,
  searchW,
  searchS,
  topNews,
  search,
};
