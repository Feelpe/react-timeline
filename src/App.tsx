import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Feelpe.png",
      name: "Felipe",
      role: "Dev FullStack",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É uma timeline que simula uma rede social. Espero que gostem 🚀",
      },
      { type: "link", content: "https://github.com/Feelpe/react-timeline" },
    ],
    publishedAt: new Date("2023-02-08 12:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/marcos.png",
      name: "Marcos",
      role: "Dev Frontend",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Empolgado para compartilhar meu novo projeto que está redefinindo os limites da inovação e da colaboração! Fique atento para mais detalhes em breve.",
      },
      { type: "link", content: "linkedin" },
    ],
    publishedAt: new Date("2023-02-07 10:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
