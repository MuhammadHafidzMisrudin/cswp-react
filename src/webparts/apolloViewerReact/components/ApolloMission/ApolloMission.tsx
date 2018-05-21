import * as React from "react";
import styles from "../ApolloViewerReact/ApolloViewerReact.module.scss";
import { IApolloMissionProps } from "./";

export class ApolloMission extends React.Component<IApolloMissionProps, {}> {
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
      </div>
    );
  }
}
