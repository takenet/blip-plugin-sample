import React, { useEffect, useState } from "react";
import "blip-toolkit/dist/blip-toolkit.css";
import { getApplication, getContacts, getThreads } from "./api/applicationService";
import {
  setHeight,
  stopLoading,
  startLoading,
  showToast
} from "./api/commomService";
import { ResizeObserver } from "resize-observer";
import { PageHeader } from "components/PageHeader";
import { BlipTable } from "components/BlipTable";
import { CommonProvider } from "contexts/CommonContext";
import { PageTemplate } from "components/PageTemplate";
import { BlipTabs } from 'blip-toolkit';

const rootDiv = document.getElementById("root");

function App() {
  const [application, setApplication] = useState({});
  const [contacts, setContacts] = useState([]);
  const [threads, setThreads] = useState([]);

  const fetchApi = async () => {
    startLoading();

    try {
      setContacts(await getContacts());
      setApplication(await getApplication());
      setThreads(await getThreads());

      showToast({
        type: "success",
        message: "Success loaded"
      });
    } catch {
      alert("Error or blip is not running");
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    fetchApi();

    const documentObserver = new ResizeObserver(() => {
      setHeight(rootDiv.scrollHeight);
    });

    documentObserver.observe(rootDiv);
  }, []);

  useEffect(
    () => {
      startLoading();
      new BlipTabs('tab-nav');
      stopLoading();
    }, []
  );

  const tableContactsModel = [
    { label: "Name", key: "name" },
    { label: "Group", key: "group" },
    { label: "Identity", key: "identity" },
    { label: "Source", key: "source" }
  ];

  const tableThreadsModel = [
    { label: "Identity", key: "identity" },
    { label: "Last Message", key: "lastMessage.content" },
    { label: "Unread Messages", key: "unreadMessages" }
  ];

  return (
    <CommonProvider>
      <div id="main" className="App">
        <PageHeader title={"Sample Plugin - " + application.shortName} />
        <PageTemplate>
          <div id="tab-nav" class="bp-tabs-container">
            <ul className="bp-tab-nav">
              <li>
                {/* eslint-disable-next-line */}
                <a href="#" data-ref="contacts">Contacts</a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a href="#" data-ref="threads">Threads</a>
              </li>
            </ul>
            <div className="bp-tab-content fl w-100" data-ref="contacts">
              <BlipTable
                idKey="identity"
                model={tableContactsModel}
                data={contacts}
                canSelect={false}
                bodyHeight="400px"
                selectedItems={[]}
              />
            </div>
            <div className="bp-tab-content fl w-100" data-ref="threads">
              <BlipTable
                idKey="identity"
                model={tableThreadsModel}
                data={threads}
                canSelect={false}
                bodyHeight="400px"
                selectedItems={[]}
              />
            </div>
          </div>
        </PageTemplate>
      </div>
    </CommonProvider>
  );
}

export default App;
