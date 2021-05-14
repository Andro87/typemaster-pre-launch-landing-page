import styles from "./Header.module.scss";
interface Props {
    readonly header: string;
    readonly type: string;
}

const Header: React.FunctionComponent<Props> = props => {
    const { header, type } = props;

    return <p className={`${styles.header} ${styles[type]}`}>{header}</p>;
};
export default Header;
