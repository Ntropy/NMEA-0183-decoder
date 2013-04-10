nmea_decoder_register(
    'gga',
    [{
        name: 'Fix',
        type: 'utc'
    },{
        name: 'Latitude',
        type: 'latitude'
    },{
        name: 'Longitude',
        type: 'longitude'
    },{
        name: 'Fix Quality',
        type: 'mapping',
        values: {
            '0': 'Invalid',
            '1': 'GPS fix (SPS)',
            '2': 'DGPS fix',
            '3': 'PPS fix',
            '4': 'Real Time Kinematic',
            '5': 'Float RTK',
            '6': 'estimated (dead reckoning)',
            '7': 'Manual input mode',
            '8': 'Simulation mode'
        }
    },{
        name: 'Number of satellites being tracked',
        type: 'int'
    },{
        name: 'Horizontal dilution of position',
        type: 'double'
    },{
        name: 'Altitude, Meters, above mean sea level',
        type: 'altitude'
    },{
        name: 'Height of geoid (mean sea level) above WGS84 ellipsoid',
        type: 'altitude'
    },{
        name: 'time in seconds since last DGPS update',
        type: 'void'
    },{
        name: 'DGPS station ID number',
        type: 'void'
    },{
        name: 'checksum',
        type: 'checksum'
    }]
);