import type { GithubUser, LocalGithubUser } from "@/types";

export const extractLocalUser = (user:GithubUser): LocalGithubUser => ({
  id: user.id, 
  login: user.login,
  avatar: user.avatarUrl, 
  name: user.name,
  company: user.company,
  blog: user.websiteUrl,
  location: user.location,
  bio: user.bio,
  twitter: user.twitterUsername,
  repos: user.repositories.totalCount,
  followers: user.followers.totalCount,
  following: user.following.totalCount,
  created: user.created_at,
});
