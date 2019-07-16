export const eventJson = JSON.stringify({
    'Event-Name': 'CUSTOM',
    'Core-UUID': '8b192020-7368-4498-9b11-cbe10f48a784',
    'FreeSWITCH-Hostname': 'smsdev',
    'FreeSWITCH-Switchname': 'smsdev',
    'FreeSWITCH-IPv4': '127.0.0.1',
    'FreeSWITCH-IPv6': '::1',
    'Event-Date-Local': '2012-09-25 14:22:37',
    'Event-Date-GMT': 'Tue, 25 Sep 2012 18:22:37 GMT',
    'Event-Date-Timestamp': '1348597357036551',
    'Event-Calling-File': 'switch_cpp.cpp',
    'Event-Calling-Function': 'Event',
    'Event-Calling-Line-Number': '262',
    'Event-Sequence': '11027',
    'Event-Subclass': 'SMS::SEND_MESSAGE',
    'proto': 'sip',
    'dest_proto': 'sip',
    'from': '##########',
    'from_full': '##########',
    'to': 'internal/"weird&character\'s<andstuff>"@zip-zop-bobity-boop.com',
    'subject': 'None',
    'type': 'text/plain',
    'hint': 'the hint',
    'replying': 'true',
    'Content-Length': '53',
    '_body': 'Hello from Chad Engler! "weird&character\'s<andstuff>"',
}, null, 4);

export const eventPlain = [
    'Event-Name: CUSTOM',
    'Core-UUID: 8b192020-7368-4498-9b11-cbe10f48a784',
    'FreeSWITCH-Hostname: smsdev',
    'FreeSWITCH-Switchname: smsdev',
    'FreeSWITCH-IPv4: 127.0.0.1',
    'FreeSWITCH-IPv6: ::1',
    'Event-Date-Local: 2012-09-25 14:22:37',
    'Event-Date-GMT: Tue, 25 Sep 2012 18:22:37 GMT',
    'Event-Date-Timestamp: 1348597357036551',
    'Event-Calling-File: switch_cpp.cpp',
    'Event-Calling-Function: Event',
    'Event-Calling-Line-Number: 262',
    'Event-Sequence: 11027',
    'Event-Subclass: SMS::SEND_MESSAGE',
    'proto: sip',
    'dest_proto: sip',
    'from: ##########',
    'from_full: ##########',
    'to: internal/"weird&character\'s<andstuff>"@zip-zop-bobity-boop.com',
    'subject: None',
    'type: text/plain',
    'hint: the hint',
    'replying: true',
    'Content-Length: 53',
    '',
    'Hello from Chad Engler! "weird&character\'s<andstuff>"',
].join('\n');

export const eventXml = [
    '<event>',
    '    <headers>',
    '        <Event-Name>CUSTOM</Event-Name>',
    '        <Core-UUID>8b192020-7368-4498-9b11-cbe10f48a784</Core-UUID>',
    '        <FreeSWITCH-Hostname>smsdev</FreeSWITCH-Hostname>',
    '        <FreeSWITCH-Switchname>smsdev</FreeSWITCH-Switchname>',
    '        <FreeSWITCH-IPv4>127.0.0.1</FreeSWITCH-IPv4>',
    '        <FreeSWITCH-IPv6>::1</FreeSWITCH-IPv6>',
    '        <Event-Date-Local>2012-09-25 14:22:37</Event-Date-Local>',
    '        <Event-Date-GMT>Tue, 25 Sep 2012 18:22:37 GMT</Event-Date-GMT>',
    '        <Event-Date-Timestamp>1348597357036551</Event-Date-Timestamp>',
    '        <Event-Calling-File>switch_cpp.cpp</Event-Calling-File>',
    '        <Event-Calling-Function>Event</Event-Calling-Function>',
    '        <Event-Calling-Line-Number>262</Event-Calling-Line-Number>',
    '        <Event-Sequence>11027</Event-Sequence>',
    '        <Event-Subclass>SMS::SEND_MESSAGE</Event-Subclass>',
    '        <proto>sip</proto>',
    '        <dest_proto>sip</dest_proto>',
    '        <from>##########</from>',
    '        <from_full>##########</from_full>',
    '        <to>internal/&quot;weird&amp;character&apos;s&lt;andstuff&gt;&quot;@zip-zop-bobity-boop.com</to>',
    '        <subject>None</subject>',
    '        <type>text/plain</type>',
    '        <hint>the hint</hint>',
    '        <replying>true</replying>',
    '        <Content-Length>78</Content-Length>',
    '    </headers>',
    '    <body>Hello from Chad Engler! &quot;weird&amp;character&apos;s&lt;andstuff&gt;&quot;</body>',
    '</event>',
].join('\n');

export const eventJsonBad = '{ herp: derp }';
export const eventXmlBad = '<herp|&"derp<//>>';
export const eventChannelData = [
    'Channel-Username: 1001',
    'Channel-Dialplan: XML',
    'Channel-Caller-ID-Name: 1001',
    'Channel-Caller-ID-Number: 1001',
    'Channel-Network-Addr: 10.0.1.241',
    'Channel-Destination-Number: 886',
    'Channel-Unique-ID: 40117b0a-186e-11dd-bbcd-7b74b6b4d31e',
    'Channel-Source: mod_sofia',
    'Channel-Context: default',
    'Channel-Channel-Name: sofia/default/1001%4010.0.1.100',
    'Channel-Profile-Index: 1',
    'Channel-Channel-Created-Time: 1209749769132614',
    'Channel-Channel-Answered-Time: 0',
    'Channel-Channel-Hangup-Time: 0',
    'Channel-Channel-Transfer-Time: 0',
    'Channel-Screen-Bit: yes',
    'Channel-Privacy-Hide-Name: no',
    'Channel-Privacy-Hide-Number: no',
    'Channel-State: CS_EXECUTE',
    'Channel-State-Number: 4',
    'Channel-Name: sofia/default/1001%4010.0.1.100',
    'Unique-ID: 40117b0a-186e-11dd-bbcd-7b74b6b4d31e',
    'Call-Direction: inbound',
    'Answer-State: early',
    'Channel-Read-Codec-Name: G722',
    'Channel-Read-Codec-Rate: 16000',
    'Channel-Write-Codec-Name: G722',
    'Channel-Write-Codec-Rate: 16000',
    'Caller-Username: 1001',
    'Caller-Dialplan: XML',
    'Caller-Caller-ID-Name: 1001',
    'Caller-Caller-ID-Number: 1001',
    'Caller-Network-Addr: 10.0.1.241',
    'Caller-Destination-Number: 886',
    'Caller-Unique-ID: 40117b0a-186e-11dd-bbcd-7b74b6b4d31e',
    'Caller-Source: mod_sofia',
    'Caller-Context: default',
    'Caller-Channel-Name: sofia/default/1001%4010.0.1.100',
    'Caller-Profile-Index: 1',
    'Caller-Channel-Created-Time: 1209749769132614',
    'Caller-Channel-Answered-Time: 0',
    'Caller-Channel-Hangup-Time: 0',
    'Caller-Channel-Transfer-Time: 0',
    'Caller-Screen-Bit: yes',
    'Caller-Privacy-Hide-Name: no',
    'Caller-Privacy-Hide-Number: no',
    'Content-Type: command/reply',
    'Socket-Mode: async',
    'Event-Name: CHANNEL_DATA',
    'Control: full',
    '',
].join('\n');

export function cmdReply(msg?: string, err: boolean = false): string
{
    return [
        'Content-Type: command/reply',
        'Reply-Text: ' + (err ? '-ERR ' : '+OK ') + (msg || 'accepted'),
        '',
    ].join('\n');
}

export const streamNormal = eventPlain;

export const streamJson = [
    'Content-Type: text/event-json',
    'Content-Length: ' + eventJson.length,
    '',
    eventJson,
].join('\n');

export const streamPlain = [
    'Content-Type: text/event-plain',
    'Content-Length: ' + eventPlain.length,
    '',
    eventPlain,
].join('\n');

export const streamXml = [
    'Content-Type: text/event-xml',
    'Content-Length: ' + eventXml.length,
    '',
    eventXml,
].join('\n');
