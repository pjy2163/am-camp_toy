import { useParams } from "react-router-dom";
import {
  Container,
  Title,
  PostList,
  PostCard,
  Writer,
  WriteButton,
} from "./BoardPage.style.js";

const dummyPosts = [
  { id: 1, title: "첫 번째 게시글", content: "내용입니다", writer: "홍길동" },
  {
    id: 2,
    title: "두 번째 글",
    content: "자유롭게 작성해보세요",
    writer: "임꺽정",
  },
];

function BoardPage() {
  const { category } = useParams();

  return (
    <Container>
      <Title>{category} 게시판</Title>
      <PostList>
        {dummyPosts.map((post) => (
          <PostCard key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <Writer>작성자: {post.writer}</Writer>
          </PostCard>
        ))}
      </PostList>
      <WriteButton onClick={() => alert("글쓰기 기능은 곧 추가됩니다!")}>
        글 작성하기
      </WriteButton>
    </Container>
  );
}

export default BoardPage;
