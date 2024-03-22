import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";

@Entity("usuarios")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  nome: string;

  @Column({ type: "text" })
  email: string;

  @OneToMany(() => Post, (post) => post.autor)
  posts: Post[];
}
