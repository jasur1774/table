import React, { Component } from "react";
import { tabledata } from "../utilities/tabledata.js";
import "./style.js";
import { Container, Wrap, Login, Email, Edit, Delete } from "./style.js";
export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: tabledata,
      edit: {
        id: "",
        Id: "",
        username: "",
        email: "",
        ip: "",
        time: "",
        login: "",
        confirmation: "",
        status: "",
      },
      add: {
        id: tabledata.length + 1,
        username: "",
        email: "",
        ip: "",
        time: "",
        login: "",
        confirmmation: "",
        status: "",
      },
      active: 0,
    };
  }
  render() {
    let handleDelete = (id) => {
      this.state.data.filter((item) => item.id !== id);
    };
    let handleClick = (number) => {
      this.setState({ active: number });
    };
    let handleAdd = ({ target }) => {
      this.setState({
        add: { ...this.state.add, [target.name]: target.value },
      });
    };
    let addInformations = () => {
      this.setState({ data: [...this.state.data, this.state.add] });
    };
    return (
      <Wrap>
        <Container>
          <table>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Email</th>
              <th>Registration ip</th>
              <th>Registration Time</th>
              <th>Last Login</th>
              <th>Confirmation</th>
              <th>Block Status</th>
            </tr>
            <tr>
              <td>
                <input
                  onChange={handleAdd}
                  name="id"
                  className="input__id"
                  value={this.state.add.id}
                  type="text"
                />
              </td>
              <td>
                <input
                  onChange={handleAdd}
                  name="username"
                  className="input__username"
                  type="text"
                  value={this.state.add.username}
                />
              </td>
              <td>
                <input
                  onChange={handleAdd}
                  name="email"
                  className="input__email"
                  type="email"
                  value={this.state.add.email}
                />
              </td>
              <td>
                <input
                  onChange={handleAdd}
                  name="ip"
                  className="input__enroll"
                  type="text"
                  value={this.state.add.ip}
                />
              </td>
              <td>
                <input
                  onChange={handleAdd}
                  name="time"
                  className="input__time"
                  type="datetime-local"
                  value={this.state.add.time}
                />
              </td>
              <td>
                <input
                  onChange={handleAdd}
                  name="login"
                  className="input__login"
                  type="datetime-local"
                  value={this.state.add.login}
                />
              </td>
              <td>
                <input
                  onChange={handleAdd}
                  name="confirmation"
                  className="input__confirm"
                  type="text"
                  value={this.state.add.confirmation}
                />
              </td>
              <td>
                <select
                  className="input__select"
                  name="status"
                  onChange={handleAdd}
                >
                  <option value={this.state.add.status}>
                    {this.state.edit.status}
                  </option>
                  <option
                    value="active"
                    onClick={({ target }) =>
                      this.setState({ edit: { status: target.value } })
                    }
                  >
                    active
                  </option>
                  <option value="no active">no active</option>
                </select>
              </td>
              <td>
                <span className="add" onClick={addInformations}>
                  Add
                </span>
              </td>
            </tr>
            <tbody>
              {this.state.data.map((item) => {
                return (
                  <tr>
                    <td> {item.Id}</td>
                    <td>
                      {this.state.active === item.username && item.Id ? (
                        <input type="text" />
                      ) : (
                        item.username
                      )}
                    </td>
                    <td>
                      {this.state.active === item.email && item.id  ? (
                        <input type="email" />
                      ) : (
                        item.email
                      )}
                    </td>
                    <td>
                      {this.state.active === item.id ? (
                        <input type="email" />
                      ) : (
                        item.ip
                      )}
                    </td>
                    <td className="regtime">
                      {this.state.active === item.id ? (
                        <input type="email" />
                      ) : (
                        item.time
                      )}
                    </td>
                    <td className="lastlogin">
                      {this.state.active === item.id ? (
                        <input type="email" />
                      ) : (
                        item.login
                      )}
                    </td>
                    <td className="confirmation">
                      {" "}
                      {this.state.active === item.id ? (
                        <input type="email" />
                      ) : (
                        item.confirmation
                      )}
                    </td>
                    <td className="status">
                      <button>
                        {this.state.active === item.id ? (
                          <input type="email" />
                        ) : (
                          item.status
                        )}
                      </button>
                    </td>
                    <td className="icons">
                      <span>
                        <Login onClick={() => handleClick(item.username)}></Login>
                      </span>
                      <span>
                        <Email onClick={() => handleClick(item.email)}></Email>
                      </span>

                      <span>
                        <Edit
                          onClick={() =>
                            handleClick(
                              item.id,
                              item.email,
                              item.ip,
                              item.time,
                              item.login,
                              item.confirmation
                            )
                          }
                        ></Edit>
                      </span>
                      <span>
                        <Delete onClick={handleDelete} />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Container>
      </Wrap>
    );
  }
}
