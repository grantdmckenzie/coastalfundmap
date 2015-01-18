-- Function: ignore_yelp(character varying, character varying, double precision, character varying, character varying[], double precision, double precision, character varying, character varying, character varying, character varying, character varying, character varying, character varying, character varying, character varying, character varying, integer, bigint)

-- DROP FUNCTION ignore_yelp(character varying, character varying, double precision, character varying, character varying[], double precision, double precision, character varying, character varying, character varying, character varying, character varying, character varying, character varying, character varying, character varying, character varying, integer, bigint);

CREATE OR REPLACE FUNCTION ignore_instagram(varchar(32), double precision, double precision, varchar(1000), int, varchar(500), varchar(500), varchar(1000), varchar(1000), bigint, varchar(100), varchar(1000), varchar(1000))
  RETURNS boolean AS
$BODY$
DECLARE tmprow RECORD;
f_i1 ALIAS FOR $1;
f_i2 ALIAS FOR $2;
f_i3 ALIAS FOR $3;
f_i4 ALIAS FOR $4;
f_i5 ALIAS FOR $5;
f_i6 ALIAS FOR $6;
f_i7 ALIAS FOR $7;
f_i8 ALIAS FOR $8;
f_i9 ALIAS FOR $9;
f_i10 ALIAS FOR $10;
f_i11 ALIAS FOR $11;
f_i12 ALIAS FOR $12;
f_i13 ALIAS FOR $13;


BEGIN
SELECT INTO tmprow * FROM instagram WHERE id=f_i1;
IF FOUND THEN 
 RETURN 'f';
ELSE
 INSERT INTO instagram VALUES (f_i1,f_i2,f_i3,f_i4,f_i5,f_i6,f_i7,f_i8,f_i9,f_i10,f_i11,f_i12,f_i13);
 RETURN 't';
END IF;
END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION ignore_instagram(varchar(32), double precision, double precision, varchar(1000), int, varchar(500), varchar(500), varchar(1000), varchar(1000), bigint, varchar(100), varchar(1000), varchar(1000))
  OWNER TO instagram;
  