import { Article } from "./Articles";

export async function Fetch(): Promise<Article[]> {
  const urlBase = import.meta.env.PUBLIC_API_STRAPI;
  const response = await fetch(urlBase);
  const { data } = await response.json();
  return data;
  }

export function extractImageUrl(content: string): string | undefined {
  const match = content.match(/!\[.*?\]\((.*?)\)/);
  return match ? match[1] : undefined; 
}