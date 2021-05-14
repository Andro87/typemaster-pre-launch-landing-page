import styles from "./Paragraph.module.scss";
interface Props {
    readonly paragraph: string;
    readonly size?: string;
}

const Paragraph: React.FunctionComponent<Props> = props => {
    const { paragraph, size } = props;

    return <p className={`${styles.paragraph} ${styles[size]}`}>{paragraph}</p>;
};
export default Paragraph;
