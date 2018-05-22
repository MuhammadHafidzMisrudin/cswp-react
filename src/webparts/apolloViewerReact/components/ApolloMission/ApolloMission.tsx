import * as React from "react";
import styles from "../ApolloViewerReact/ApolloViewerReact.module.scss";
import { IApolloMissionProps } from "./";

export class ApolloMission extends React.Component<IApolloMissionProps, {}> {
  // constructor(props: IApolloMissionProps) {
  //   super(props);
  //   this._handleOnRemoveClick = this._handleOnRemoveClick.bind(this);
  // }

  public render(): React.ReactElement<IApolloMissionProps> {
    // this a child component of ApolloViewerReact component.
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td className="ms-textAlignRight">
                <strong>ID:</strong>
              </td>
              <td>{this.props.mission.id}</td>
            </tr>
            <tr>
              <td className="ms-textAlignRight">
                <strong>Name:</strong>
              </td>
              <td>{this.props.mission.name}</td>
            </tr>
            <tr>
              <td className="ms-textAlignRight">
                <strong>Date:</strong>
              </td>
              <td>
                {this.props.mission.launch_date} - {this.props.mission.end_date}
              </td>
            </tr>
            <tr>
              <td className="ms-textAlignRight">
                <strong>Summary:</strong>
              </td>
              <td>{this.props.mission.summary}</td>
            </tr>
          </tbody>
        </table>
        <a href={this.props.mission.wiki_href} className={styles.button}>
          <span className={styles.label}>Learn more</span>
        </a>
        <a
          href=""
          className={styles.button}
          onClick={this._handleOnRemoveClick}
        >
          <span className={styles.label}>Remove Mission</span>
        </a>
      </div>
    );
  }

  // create handle for remove button.
  private _handleOnRemoveClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ): void => {
    event.preventDefault();
    this.props.onRemoveMission(this.props.mission);
  };

  // private _handleOnRemoveClick(
  //   event: React.MouseEvent<HTMLAnchorElement>
  // ): void {
  //   event.preventDefault();
  //   this.props.onRemoveMission(this.props.mission);
  // }
}
