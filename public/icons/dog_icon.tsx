import { BoxProps } from "@mui/material";

interface Props extends BoxProps {
  fillColor?: string;
}

export default function DogIcon({ fillColor = "#212121", ...other }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="url(#pattern0_170_1402)"
        d="M0.216 0.525H15.216V15.525H0.216z"
      ></path>
      <defs>
        <pattern
          id="pattern0_170_1402"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.03125)" xlinkHref="#image0_170_1402"></use>
        </pattern>
        <image
          id="image0_170_1402"
          width="32"
          height="32"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACuElEQVRYCe2VwUtUURTGz5hTFoSFFlm0GCJBsSQhaBUJbaZFRLUqWwj+B7VoUaEr90EiCroKDKIWQ0RYVBRWQ7SIqDCCUSYsKWdRUak1/T58D58yz+7Tea0cvt/9zr333HPv3HkzY7b6WtkNNLF8GJrhv+sUO/6EIhyBBrgItyF2dbDDb9Dm4mkgfkIcqw5SfQZ0gBe4DhBkiDFnVThnziVWYr0g7zSzAZC+0vSBNK7GlQrXRC/vGK7PehTvhncgZWl0I5iNqXFF78Q1V3kn1EAPzEIepDqaaZAiHUALojBKsj7vRlyqplH/Bz4Bivfgseg4VbWRNqkl9vWGQGM+1+m3QgLKou1UuQP+BjkzWwO+tNFhOtfgF/h5WeJgHt3oSrPkM6joFH4W1kGYtjBxDiZAa07jy5Le1QVW6slWoQyxbgJzkjbWujGymyCSNpB9E1RABzhPnAAX3SfpHujqn+FF+AZt4KSNZD0ELSzgaYiiRyRrPWbrafpBtcQV4iSEqpqZEVByHm+AcugMRXQLqvvAzGqhpLKMKuk9noJyai/FpkD13+K6aWyhCnSVsAsvtzrNTLX9Q/j/IRb8L/hCUlyq8grPel7j+QK7RU+n1C8eobPqyWyHDmiFTbBYGsvZ3C1M4iW/0l1M6ACXcRe1kPQctCbINGMZOABSiuY1KCePN0JJ7WNUSR/xSlhKzUx+B+WP41dhEEZgBooeOsgnL9Z/hg5DN1yvmNLidjxMCSZegvL0MCWJg9pKpwsKoBwxTKyPAVtaJ5nWAp06bEHay8mZ2VoIUw0TN6AX/nWjpMzrLqEOkcFLLexhXPOX8FiUouokaBNd3U7ioB7T0dwhi/HVQu0PoI30sA0SH4U60ENaxHdArNpG9SH4A9pwMUnGV6yEQ4V6ctpgP+yGzR5VuL7z2KqWfwN/AV74rgci7qhWAAAAAElFTkSuQmCC"
        ></image>
      </defs>
    </svg>
  );
}
