--
-- PostgreSQL database dump
--

\restrict QxAAvfvGiLd3JhpkBoKC8AF6weYnqKziNSc3Bvb5EMnyKHSqKmhBsHaDh0sfasO

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: incidents; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA incidents;


ALTER SCHEMA incidents OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: incidents; Type: TABLE; Schema: incidents; Owner: postgres
--

CREATE TABLE incidents.incidents (
    id integer,
    stream_id integer,
    "timestamp" date,
    type character varying,
    severity character varying,
    summary character varying
);


ALTER TABLE incidents.incidents OWNER TO postgres;

--
-- Data for Name: incidents; Type: TABLE DATA; Schema: incidents; Owner: postgres
--

COPY incidents.incidents (id, stream_id, "timestamp", type, severity, summary) FROM stdin;
1	1	2025-03-03	arson	high	nothing
\.


--
-- PostgreSQL database dump complete
--

\unrestrict QxAAvfvGiLd3JhpkBoKC8AF6weYnqKziNSc3Bvb5EMnyKHSqKmhBsHaDh0sfasO

