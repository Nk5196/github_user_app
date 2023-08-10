import React, { useState } from 'react';
import { Button, Input, Box, Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Heading, Text, IconButton, Image, Link } from '@chakra-ui/react';
import { format } from 'date-fns';

const Input_ = () => {
    const [username, setUsername] = useState('');
    const [userInfo, setUserInfo] = useState(null);

    const gitData = async () => {
        console.log("first");
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setUserInfo(data);
            } else {
                console.error('Error fetching user info:', response.statusText);
                setUserInfo(null);
            }
        } catch (error) {
            console.error('Error fetching user info:', error);
            setUserInfo(null);
        }
    };

    return (
        <> <Box display="flex" flexDirection={{ base: 'column', md: 'row' }}>
        <Box className='Box1' p={{ base: '4', md: '8' }} flex={{ base: '1', md: '1' }}>
            <Input w='100%' placeholder='Username' color={'black'} value={username}
                onChange={(e) => setUsername(e.target.value)} />
            <Button mt={2} onClick={gitData}>Get User Info</Button>
        </Box>
        <Box className='Box2' p={{ base: '4', md: '8' }} flex={{ base: '1', md: '1' }}>
           
                {userInfo && (
                    <Card maxW='md'>
                        <CardHeader>
                            <Flex spacing='4'>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                    <Avatar name='Segun Adebayo' src={userInfo.avatar_url} />

                                    <Box>
                                        <Heading size='sm'>{userInfo.name}</Heading>
                                        <Text>{userInfo.location}</Text>
                                    </Box>
                                </Flex>
                                <IconButton
                                    variant='ghost'
                                    colorScheme='gray'
                                    aria-label='See menu'
                                />
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text>{userInfo.bio}</Text>
                            <Text display={'flex'} m='2'>
                                <Heading size={'sm'} mt="1px" mr={1}>
                                    Public Repo -
                                </Heading>
                                {userInfo.public_repos}
                            </Text>
                            <Text display={'flex'} m='2'>
                                <Heading size={'sm'} mt="1px" mr={1}>
                                    Public Gists -
                                </Heading>
                                {userInfo.public_gists}
                            </Text>
                            <Text display={'flex'} m='2'>
                                <Heading size={'sm'} mt="1px" mr={1}>
                                    Created At -
                                </Heading>
                                {format(new Date(userInfo.created_at), 'MMMM dd, yyyy')}
                            </Text>
                            <Text display={'flex'} m='2'>
                                <Heading size={'sm'} mt="1px" mr={1}>
                                    Username -
                                </Heading>
                                <Link color={'blue.400'} href={userInfo.html_url} target='_blank'>{userInfo.login}</Link>
                            </Text>
                        </CardBody>


                        <CardFooter
                            justify='space-between'
                            flexWrap='wrap'
                            sx={{
                                '& > button': {
                                    minW: '136px',
                                },
                            }}
                        ></CardFooter>
                    </Card>
                )}
            </Box>
        </Box>
        </>
    );
};

export default Input_;
