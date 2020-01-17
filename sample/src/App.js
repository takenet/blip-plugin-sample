import React, { useEffect, useState } from 'react';
import 'blip-toolkit/dist/blip-toolkit.css'
import { getApplication, getContacts } from './api/applicationService';
import { setHeight, stopLoading, startLoading, showToast } from './api/commomService';
import { ResizeObserver } from 'resize-observer';

const rootDiv = document.getElementById('root');

function App() {
    const [application, setApplication] = useState({})
    const [contacts, setContacts] = useState([])

    const fetchApi = async () => {
        startLoading()

        try {
            setContacts(await getContacts());
            setApplication(await getApplication());

            showToast({
                type: 'success',
                message: 'Success loaded'
            })
        } catch {
            alert('Error or blip is not running')
        } finally {
            stopLoading()
        }
    };

    useEffect(() => {
        fetchApi()

        const documentObserver = new ResizeObserver(
            () => {
                setHeight(rootDiv.scrollHeight);
            }
        );
    
        documentObserver.observe(rootDiv);
    }, []);

    return (
        <div className="App">
            Application: {application.shortName}
            <table className="bp-table">
                <thead>
                    <tr>
                        <th className="tl">Name</th>
                        <th className="tc">Group</th>
                        <th className="tc">Identity</th>
                        <th className="tr">Source</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map(contact => (
                            <tr>
                                <td className="tl">{contact.name}</td>
                                <td className="tc">{contact.group}</td>
                                <td className="tc">{contact.identity}</td>
                                <td className="tr">{contact.source}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default App;
