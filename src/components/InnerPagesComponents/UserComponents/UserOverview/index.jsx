import React, { useState } from 'react'
import { Button, Form, InputGroup, Table } from 'react-bootstrap'
import Penline from './../../../../assets/svg/pen-line.svg'
import Plusaddlink from './../../../../assets/svg/plus-square.svg'
import Userprofilewicon from './../../../../assets/svg/userprofile_wicon.svg'
import Replace from './../../../../assets/svg/replace.svg'
import Trash from './../../../../assets/svg/trash.svg'

function UserOverview() {
    const [isEditing, setIsEditing] = useState(false);
    const [url, setUrl] = useState('creatorshub.com/mason_cooper');
    const [displayName, setDisplayName] = useState('Mason Cooper');
    const [bio, setBio] = useState('Lifestyle and travel blogger who loves to explore new destinations and share my experiences with my followers. With a background in photography, Instagram is filled with vibrant images from my adventures around the world.');
    const [socialLinks, setSocialLinks] = useState([
        { site: 'Facebook', link: 'https://facebook.com/u/mason_cooper' },
        { site: 'YouTube', link: 'https://youtube.com/u/mason_cooper' },
        { site: 'Twitch', link: 'https://twitch.com/u/mason_cooper' },
        { site: 'Instagram', link: 'https://instagram.com/u/mason_cooper' },
        { site: 'Discord', link: 'https://discord.com/u/mason_cooper' }
    ]);
    const [newSite, setNewSite] = useState('');
    const [newLink, setNewLink] = useState('');

    const handleEditProfile = () => {
        setIsEditing(true);
    };

    const handleSaveChanges = () => {
        setIsEditing(false);
    };

    const handleAddLink = () => {
        if (newSite && newLink) {
            setSocialLinks([...socialLinks, { site: newSite, link: newLink }]);
            setNewSite('');
            setNewLink('');
        }
    };

    const handleDeleteLink = (index) => {
        const updatedLinks = socialLinks.filter((_, i) => i !== index);
        setSocialLinks(updatedLinks);
    };
    return (
        <>
            {!isEditing ? (
                <div className='livestreambox1 mt-5'>
                    <div className='profileoverview'>
                        <div className='profileoverviewtoppart'>
                            <div>
                                <h3>Profile Overview</h3>
                                <p>Creators you are following, their updates show up in your timeline</p>
                            </div>
                            <div>
                                <button className='btn btnpenline' onClick={handleEditProfile}>
                                    <img src={Penline} alt="" /> Edit Profile
                                </button>
                            </div>
                        </div>
                        <hr style={{ color: '#a3a3a3' }} />
                        <Table bordered hover className="gradient-border">
                            <tbody>
                                <tr>
                                    <td width='50%'>Name</td>
                                    <td>Mason Cooper</td>
                                </tr>
                                <tr>
                                    <td>Username</td>
                                    <td>@mason_cooper</td>
                                </tr>
                                <tr>
                                    <td>E-mail</td>
                                    <td>mason.cooper@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Account Type</td>
                                    <td>Fan</td>
                                </tr>
                                <tr>
                                    <td>Bio</td>
                                    <td>Lifestyle and travel blogger who loves to explore new destinations and share my experiences with my followers. With a background in photography, Instagram is filled with vibrant images from my adventures around the world.</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            ) : (
                <>
                    <div className='livestreambox1 mt-5'>
                        <div className='profileoverview'>
                            <div className='profileoverviewtoppart'>
                                <div>
                                    <h3>Profile Edit</h3>
                                    <p style={{ margin: '0' }}>Configure and personalize your profile.</p>
                                </div>
                            </div>
                            <hr style={{ color: '#a3a3a3' }} />
                            <div className='profileeditbox'>
                                <div className='profileeditbox_left'>
                                    <img src={Userprofilewicon} alt="" />
                                    <button className='btn btnreplace'><img src={Replace} alt="" /> Replace</button>
                                </div>
                                <div className='profileeditbox_right'>
                                    <Form.Label htmlFor="basic-url">Username</Form.Label>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon3">
                                            creatorshub.com
                                        </InputGroup.Text>
                                        <Form.Control id="basic-url" aria-describedby="basic-addon3" value={url} onChange={(e) => setUrl(e.target.value)} />
                                    </InputGroup>
                                    <Form.Label htmlFor="displayName">Display Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="displayName"
                                        aria-describedby="displayNameHelpBlock"
                                        value={displayName}
                                        onChange={(e) => setDisplayName(e.target.value)}
                                    />
                                    <Form.Label htmlFor="bio" style={{ marginTop: '15px' }}>Bio</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        id="bio"
                                        placeholder="Leave a comment here"
                                        value={bio}
                                        onChange={(e) => setBio(e.target.value)}
                                        style={{ height: '90px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='livestreambox1 mt-3'>
                        <div className='profileoverview'>
                            <div className='profileoverviewtoppart'>
                                <div>
                                    <h3>Social Links</h3>
                                    <p>Creators you are following, their updates show up in your timeline.</p>
                                </div>
                                <div>
                                    <button className='btn btnpenline' onClick={handleAddLink}><img src={Plusaddlink} alt="" /> Add Links</button>
                                </div>
                            </div>
                            <hr style={{ color: '#a3a3a3' }} />
                            <Table bordered hover className="gradient-border">
                                <tbody>
                                    <tr>
                                        <td style={{ background: '#ececec' }}>SITE</td>
                                        <td style={{ background: '#ececec' }}>LINK</td>
                                        <td style={{ background: '#ececec' }}></td>
                                    </tr>
                                    {socialLinks.map((link, index) => (
                                        <tr key={index}>
                                            <td width='50%'>{link.site}</td>
                                            <td>{link.link}</td>
                                            <td><img src={Trash} alt="" onClick={() => handleDeleteLink(index)} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <div className="mt-3">
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Site</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={newSite}
                                            onChange={(e) => setNewSite(e.target.value)}
                                            placeholder="Enter site name"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mt-2">
                                        <Form.Label>Link</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={newLink}
                                            onChange={(e) => setNewLink(e.target.value)}
                                            placeholder="Enter link URL"
                                        />
                                    </Form.Group>
                                    <Button variant="primary" className="mt-3" onClick={handleAddLink}>
                                        Add Social Link
                                    </Button>
                                </Form>
                            </div>
                        </div>
                        <Button className='btn savechange' onClick={handleSaveChanges}>Save Changes</Button>
                    </div>
                </>
            )}
        </>
    );
}

export default UserOverview