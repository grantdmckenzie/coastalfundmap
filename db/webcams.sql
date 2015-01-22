create table webcams(
  id serial,
  lat double precision,
  lng double precision,
  url varchar(500),
  thumb varchar(500)
)

INSERT INTO webcams (lat, lng, url, thumb) VALUES (34.407265 , -119.843389, 'http://www.offshoretheater.com/campus-point/', '');
INSERT INTO webcams (lat, lng, url, thumb) VALUES (34.415037 , -119.838948, 'http://www.lookr.com/lookout/1185651807-Goleta', '');
INSERT INTO webcams (lat, lng, url, thumb) VALUES (34.417016 , -119.830471, 'http://www.lookr.com/lookout/1414697629-Goleta', '');



create table buoy(
  id serial,
  lat double precision,
  lng double precision,
  url varchar(500),
  thumb varchar(500)
);

INSERT INTO buoy (lat, lng, url, thumb) VALUES (34.405, -119.692, 'http://www.ndbc.noaa.gov/data/latest_obs/ntbc1.rss', '');
INSERT INTO buoy (lat, lng, url, thumb) VALUES (34.333, -119.803, 'http://www.ndbc.noaa.gov/data/latest_obs/46216.rss', 'http://www.ndbc.noaa.gov/images/stations/scripps_mini.jpg');
INSERT INTO buoy (lat, lng, url, thumb) VALUES (34.262, -119.879, 'http://www.ndbc.noaa.gov/station_page.php?station=46053', 'http://www.ndbc.noaa.gov/images/stations/3m_mini.jpg');


create table surfreport(
  id serial,
  name varchar(500),
  lat double precision,
  lng double precision,
  url varchar(500),
  thumb varchar(500)
);
INSERT INTO surfreport (name, lat, lng, url, thumb) VALUES ('Devereaux', 34.407447 , -119.87704, 'http://magicseaweed.com/Devereux-Surf-Report/4251/', '');
INSERT INTO surfreport (name, lat, lng, url, thumb) VALUES ('Campus Point', 34.405394 , -119.842665, 'http://magicseaweed.com/Campus-Point-Surf-Report/269/', '');
INSERT INTO surfreport (name, lat, lng, url, thumb) VALUES ('Sands', 34.407164 , -119.880216, 'http://magicseaweed.com/Sands-Beach-Surf-Guide/268/', '');
INSERT INTO surfreport (name, lat, lng, url, thumb) VALUES ('Haskels', 34.430211 , -119.916694, 'http://magicseaweed.com/Haskels-Beach-Surf-Guide/1252/', '');


create table geodetic(
  id serial,
  name varchar(500),
  lat double precision,
  lng double precision,
  url varchar(500),
  thumb varchar(500)
);
INSERT INTO geodetic (name, lat, lng, url, thumb) VALUES ('PELICAN 2', 34.430211 , -119.916694, 'http://www.ngs.noaa.gov/cgi-bin/ds_mark.prl?PidBox=EW8087', '');
INSERT INTO geodetic (name, lat, lng, url, thumb) VALUES ('GOLETA UCSB TOWER', 34.41263, -119.84837,'http://www.ngs.noaa.gov/cgi-bin/ds_mark.prl?PidBox=EW8115','');
INSERT INTO geodetic (name, lat, lng, url, thumb) VALUES ('PELICAN RM 2',34.40525,-119.84409,'http://www.ngs.noaa.gov/cgi-bin/ds_mark.prl?PidBox=EW8180','');
INSERT INTO geodetic (name, lat, lng, url, thumb) VALUES ('GOLETA SANTA BARBARA COLL TK', 34.40968,-119.84473,'http://www.ngs.noaa.gov/cgi-bin/ds_mark.prl?PidBox=EW8100','');
INSERT INTO geodetic (name, lat, lng, url, thumb) VALUES ('SANTA BARBARA CORS ARP', 34.41568,-119.84527,'http://www.ngs.noaa.gov/cgi-bin/ds_mark.prl?PidBox=DP2483','');
INSERT INTO geodetic (name, lat, lng, url, thumb) VALUES ('UCSB UC SANTA BARBARA GRM', 34.41330,-119.84380,'http://www.ngs.noaa.gov/cgi-bin/ds_mark.prl?PidBox=AJ1933','');
INSERT INTO geodetic (name, lat, lng, url, thumb) VALUES ('AIRPORT BCN SANTA BARBARA APT', 34.42001,-119.83447,'http://www.ngs.noaa.gov/cgi-bin/ds_mark.prl?PidBox=EW8091','');
INSERT INTO geodetic (name, lat, lng, url, thumb) VALUES ('CAMPBELL PROPERTY MONUMENT', 34.40782,-119.87917,'http://www.ngs.noaa.gov/cgi-bin/ds_mark.prl?PidBox=EW6640','');
INSERT INTO geodetic (name, lat, lng, url, thumb) VALUES ('CAMPBELL', 34.40793,-119.87889,'http://www.ngs.noaa.gov/cgi-bin/ds_mark.prl?PidBox=EW8138','');
INSERT INTO geodetic (name, lat, lng, url, thumb) VALUES ('COPR ARD', 34.41491,-119.87953,'http://www.ngs.noaa.gov/cgi-bin/ds_mark.prl?PidBox=DH8060','');
INSERT INTO geodetic (name, lat, lng, url, thumb) VALUES ('COPR GRM', 34.41491,-119.87953,'http://www.ngs.noaa.gov/cgi-bin/ds_mark.prl?PidBox=DH6817','');
INSERT INTO geodetic (name, lat, lng, url, thumb) VALUES ('COPR BPA', 34.41491,-119.87953,'http://www.ngs.noaa.gov/cgi-bin/ds_mark.prl?PidBox=DH8040','');
INSERT INTO geodetic (name, lat, lng, url, thumb) VALUES ('COPR_SCGN_CS2001', 34.41490,-119.87951,'http://www.ngs.noaa.gov/cgi-bin/ds_mark.prl?PidBox=DL7688','');
INSERT INTO geodetic (name, lat, lng, url, thumb) VALUES ('COPR_SCGN_CS2001 CORS ARP', 34.41490,-119.87951,'http://www.ngs.noaa.gov/cgi-bin/ds_mark.prl?PidBox=DL7686','');
INSERT INTO geodetic (name, lat, lng, url, thumb) VALUES ('CAMPBELL RESIDENCE WATER TANK', 34.41098,-119.87566,'http://www.ngs.noaa.gov/cgi-bin/ds_mark.prl?PidBox=EW8105','');
INSERT INTO geodetic (name, lat, lng, url, thumb) VALUES ('CAMPBELL RANCH WATER TANK', 34.41442,-119.87004,'http://www.ngs.noaa.gov/cgi-bin/ds_mark.prl?PidBox=EW8101','');

create table weather(
  id serial,
  lat double precision,
  lng double precision,
  url varchar(500),
  thumb varchar(500)
);

INSERT INTO geodetic (lat, lng, url, thumb) VALUES (34.42,119.85,'http://www.wunderground.com/weather-forecast/US/CA/Goleta.html','');
INSERT INTO geodetic (lat, lng, url, thumb) VALUES (34.43, 119.84, 'http://www.wunderground.com/weather-forecast/US/CA/Goleta.html?MR=1','');