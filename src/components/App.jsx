import React, { Component } from 'react';

import Drivers from './Drivers';
import Heading from './Heading';
import Resolver  from './Resolver';
import Footer from './Footer';

export class App extends Component {

	constructor (props) {
		super(props);
		this.drivers = [
			{name: 'did:btcr'},
			{name: 'did:sov'},
			{name: 'did:v1'},
			{name: 'did:key'},
			{name: 'did:ethr'},
			{name: 'did:nacl'},
			{name: 'did:web'},
			{name: 'did:elem'},
			{name: 'did:github'},
			{name: 'did:stack'},
			{name: 'did:hcr'},
			{name: 'did:ccp'},
			{name: 'did:work'},
			{name: 'did:ont'},
			{name: 'did:kilt'},
			{name: 'did:evan'},
			{name: 'did:factom'},
			{name: 'did:abt'},
			{name: 'did:mpg'},
			{name: 'did:io'},
			{name: 'did:trust'},
			{name: 'did:bba'},
			{name: 'did:schema'},
			{name: 'did:ion'},
			{name: 'did:gatc'},
			{name: 'did:ace'},
		];
		this.examples = [
			'did:sov:WRfXPg8dantKVubE3HX8pw',
			'did:sov:CYQLsccvwhMTowprMjGjQ6',
			'did:sov:builder:VbPQNHsvoLZdaNU7fTBeFx',
			'did:btcr:xz35-jznz-q9yu-ply',
			'did:btcr:xkrn-xz7q-qsye-28p',
			'did:btcr:x705-jznz-q3nl-srs',
			'did:btcr:xksa-czpq-qxr3-l8k',
			'did:btcr:xkyt-fzzq-q23l-k4n',
			'did:btcr:xyv2-xzpq-q63z-7p4',
			'did:btcr:xxcl-lzpq-qcwz-sj2',
			'did:v1:test:nym:z6MkgF4uJbLMoUin2uKaBf4Jb1F7SHzuALE8Ldq8FPPpHE9t',
			'did:ethr:0xE6Fe788d8ca214A080b0f6aC7F48480b2AEfa9a6',
			'did:nacl:Md8JiMIwsapml_FtQ2ngnGftNP5UmVCAUuhnLyAsPxI',
			'did:elem:EiAS3mqC4OLMKOwcz3ItIL7XfWduPT7q3Fa4vHgiCfSG2A',
			'did:key:z6Mkfriq1MqLBoPWecGoDLjguo1sB9brj6wT3qZ5BxkKpuP6',
			'did:github:gjgd',
			'did:stack:v0:16EMaNw3pkn3v6f2BgnSSs53zAKH4Q8YJg-0',
			'did:hcr:0f674e7e-4b49-4898-85f6-96176c1e30de',
			'did:ccp:ceNobbK6Me9F5zwyE3MKY88QZLw',
			'did:work:2UUHQCd4psvkPLZGnWY33L',
			'did:ont:AN5g6gz9EoQ3sCNu7514GEghZurrktCMiH',
			'did:kilt:5CqJa4Ct7oMeMESzehTiN9fwYdGLd7tqeirRMpGDh2XxYYyx',
			'did:web:did.actor:alice',
			'ssi.labs.nic.at',
			'did:evan:testcore:0x126E901F6F408f5E260d95c62E7c73D9B60fd734',
			'did:factom:testnet:6aa7d4afe4932885b5b6e93accb5f4f6c14bd1827733e05e3324ae392c0b2764',
			'did:abt:z116ygT18P67xBp3scBtZLU6xVoDy268bgnY',
			'did:mpg:7PGGnRdvKKFftSXU3Jw75Vk5npfg',
			'did:io:0x476c81C27036D05cB5ebfe30ae58C23351a61C4A',
			'did:trust:cert.EiBJ6qjVXgJ-A8xnaUiu4rtLDgeobQYgRWjMV49aCak4HQ',
			'did:bba:t:45e6df15dc0a7d91dcccd24fda3b52c3983a214fb0eed0938321c11ec99403cf',
			'did:schema:public-ipfs:xsd:QmUQAxKQ5sbWWrcBZzwkThktfUGZvuPQyTrqMzb3mZnLE5',
			'did:ion:EiC5-1uBg-YC2DvQRbI6eihDvk7DOYaQ08OB0I3jCe9Ydg:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljX2tleXMiOlt7ImlkIjoiYW55U2lnbmluZ0tleUlkIiwiandrIjp7ImNydiI6InNlY3AyNTZrMSIsImt0eSI6IkVDIiwieCI6ImFHc01HMHU5Rlg2STU0cGVJS3FZb2tqblFQR2hMVVlUT1FOYzNuT3ZFMVEiLCJ5IjoiZmppbHFoZVdRWWtITkU3MHNoTVJ5TURyWnA4RUdDZkVfYUwzaC15Sm1RQSJ9LCJwdXJwb3NlIjpbImF1dGgiLCJnZW5lcmFsIl0sInR5cGUiOiJFY2RzYVNlY3AyNTZrMVZlcmlmaWNhdGlvbktleTIwMTkifV0sInNlcnZpY2VfZW5kcG9pbnRzIjpbeyJlbmRwb2ludCI6Imh0dHA6Ly9hbnkuZW5kcG9pbnQiLCJpZCI6ImFueVNlcnZpY2VFbmRwb2ludElkIiwidHlwZSI6ImFueVR5cGUifV19fV0sInVwZGF0ZV9jb21taXRtZW50IjoiRWlERkM2RE9Ed0JNeG5kX19oMTFSeDRObjFlOHpubFlPUjJhLVBqeUNva2NGZyJ9LCJzdWZmaXhfZGF0YSI6eyJkZWx0YV9oYXNoIjoiRWlBbExNMC1qem1DWi1FcElVZ0laQ2piWk5yMDFfVVBMbnd5MHdfT3I0Rks0dyIsInJlY292ZXJ5X2NvbW1pdG1lbnQiOiJFaUJDNGhTMVVHeVNnTmYzbWFMdnNKRUpxX05aQUlKa0pndTNKMTJMeGNESE93In19',
			'did:gatc:2xtSori9UQZdTqzxrkp7zqKM4Kj5B4C7',
			'did:ace:0xf81c16a78b257c10fddf87ed4324d433317169a005ddf36a3a1ba937ba9788e3',
		];
		this.examples.sort();
		this.state = { drivers: this.drivers };
	}

	render() {
		var did;
		var autoResolve;
		if (this.props.location.hash) {
			if (this.props.location.hash.indexOf("#did=") == 0) {
				did = this.props.location.hash.substr("#did=".length);
			} else {
				did = this.props.location.hash.substr(1);
			}
			autoResolve = true;
		} else {
			did = 'did:elem:EiAS3mqC4OLMKOwcz3ItIL7XfWduPT7q3Fa4vHgiCfSG2A';
			autoResolve = false;
		}
		return (
			<div className="app">
				<Heading />
				<Drivers drivers={this.state.drivers} />
				<Resolver did={did} autoResolve={autoResolve} examples={this.examples} />
				<Footer />
			</div>
		);
	}
}

export default App;
