import { randomUUID } from "crypto";
import { Injectable } from "@nestjs/common";
import { NewsProps, Paragraph } from "@seven/core/shared/repositories/news-repository";

@Injectable()
export class NewsEntity {
  private props: NewsProps;

  constructor(props: Partial<NewsProps>) {
    this.props = {
      id: props.id ?? randomUUID(),
      theme: props.theme ?? '',
      title: props.title ?? '',
      coverImage: props.coverImage ?? '',
      resume: props.resume ?? '',
      content: props.content ?? [],
      contentHighlight: props.contentHighlight ?? '',
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
      author: props.author ?? '',
    };
  }

  get id() {
    return this.props.id;
  }

  get theme() {
    return this.props.theme;
  }

  get title() {
    return this.props.title;
  }

  get coverImage() {
    return this.props.coverImage;
  }

  get resume() {
    return this.props.resume;
  }

  get content() {
    return this.props.content;
  }

  get contentHighlight() {
    return this.props.contentHighlight;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  get author() {
    return this.props.author;
  }

  toJSON(): NewsProps {
    return {
      id: this.id,
      theme: this.theme,
      title: this.title,
      coverImage: this.coverImage,
      resume: this.resume,
      content: this.content,
      contentHighlight: this.contentHighlight,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      author: this.author,
    };
  }
}
