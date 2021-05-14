import { ReactNode } from "react";
import styles from "./Detail.module.scss";
interface Props {
    readonly icon: ReactNode;
    readonly header: ReactNode;
    readonly paragraph: ReactNode;
}

const Detail: React.FunctionComponent<Props> = props => {
    const { icon, header, paragraph } = props;

    return (
        <div className={styles.details}>
            <div className={styles.icon_box}> {icon}</div>

            {header}

            {paragraph}
        </div>
    );
};
export default Detail;
