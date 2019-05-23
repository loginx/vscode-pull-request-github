import { Uri } from 'vscode';
import { Repository, RepositoryState, RepositoryUIState, Commit, Branch } from '../../api/api';

export class MockRepository implements Repository {
	rootUri = Uri.file('/root');

	state: RepositoryState = {
		HEAD: undefined,
		refs: [],
		remotes: [],
		submodules: [],
		rebaseCommit: undefined,
		mergeChanges: [],
		indexChanges: [],
		workingTreeChanges: [],
		onDidChange: () => ({ dispose() {} }),
	};

	ui: RepositoryUIState = {
		selected: true,
		onDidChange: () => ({ dispose() {} }),
	};

	getConfigs(): Promise<{ key: string; value: string; }[]> {
		return Promise.reject(new Error('Unexpected getConfigs()'));
	}
	getConfig(key: string): Promise<string> {
		return Promise.reject(new Error(`Unexpected getConfig(${key})`));
	}
	setConfig(key: string, value: string): Promise<string> {
		return Promise.reject(new Error(`Unexpected setConfig(${key}, ${value})`));
	}
	getObjectDetails(treeish: string, treePath: string): Promise<{ mode: string; object: string; size: number; }> {
		return Promise.reject(new Error(`Unexpected getObjectDetails(${treeish}, ${treePath})`));
	}
	show(ref: string, treePath: string): Promise<string> {
		return Promise.reject(new Error(`Unexpected show(${ref}, ${treePath})`));
	}
	getCommit(ref: string): Promise<Commit> {
		return Promise.reject(new Error(`Unexpected getCommit(${ref})`));
	}
	apply(patch: string, reverse?: boolean | undefined): Promise<void> {
		return Promise.reject(new Error(`Unexpected apply(..., ${reverse})`));
	}
	diff(cached?: boolean | undefined): Promise<string> {
		return Promise.reject(new Error(`Unexpected diff(${cached})`));
	}
	diffWith(ref: string, treePath: string): Promise<string> {
		return Promise.reject(new Error(`Unexpected diffWith(${ref}, ${treePath})`));
	}
	diffBlobs(object1: string, object2: string): Promise<string> {
		return Promise.reject(new Error(`Unexpected diffBlobs(${object1}, ${object2})`));
	}
	diffBetween(ref1: string, ref2: string, treePath: string): Promise<string> {
		return Promise.reject(new Error(`Unexpected diffBlobs(${ref1}, ${ref2}, ${treePath})`));
	}
	hashObject(data: string): Promise<string> {
		return Promise.reject(new Error('Unexpected hashObject(...)'));
	}
	createBranch(name: string, checkout: boolean, ref?: string | undefined): Promise<void> {
		return Promise.reject(new Error(`Unexpected createBranch(${name}, ${checkout}, ${ref})`));
	}
	deleteBranch(name: string, force?: boolean | undefined): Promise<void> {
		return Promise.reject(new Error(`Unexpected deleteBranch(${name}, ${force})`));
	}
	getBranch(name: string): Promise<Branch> {
		return Promise.reject(new Error(`Unexpected getBranch(${name})`));
	}
	setBranchUpstream(name: string, upstream: string): Promise<void> {
		return Promise.reject(new Error(`Unexpected setBranchUpstream(${name})`));
	}
	status(): Promise<void> {
		return Promise.reject(new Error('Unexpected status()'));
	}
	checkout(treeish: string): Promise<void> {
		return Promise.reject(new Error(`Unexpected checkout(${treeish})`));
	}
	addRemote(name: string, url: string): Promise<void> {
		return Promise.reject(new Error(`Unexpected addRemote(${name}, ${url})`));
	}
	removeRemote(name: string): Promise<void> {
		return Promise.reject(new Error(`Unexpected removeRemote(${name})`));
	}
	fetch(remote?: string | undefined, ref?: string | undefined, depth?: number | undefined): Promise<void> {
		return Promise.reject(new Error(`Unexpected fetch(${remote}, ${ref}, ${depth})`));
	}
	pull(unshallow?: boolean | undefined): Promise<void> {
		return Promise.reject(new Error(`Unexpected pull(${unshallow})`));
	}
	push(remoteName?: string | undefined, branchName?: string | undefined, setUpstream?: boolean | undefined): Promise<void> {
		return Promise.reject(new Error(`Unexpected push(${remoteName}, ${branchName}, ${setUpstream})`));
	}
	blame(treePath: string): Promise<string> {
		return Promise.reject(new Error(`Unexpected blame(${treePath})`));
	}
}